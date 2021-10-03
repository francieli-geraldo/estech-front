import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription, Observer } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthModel } from '../_models/auth.model';
import { AuthHTTPService } from './auth-http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  // public fields
  currentUser$: Observable<UserModel>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;
  isLoadingSubject: BehaviorSubject<boolean>;


  get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserModel) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    protected _sanitizer: DomSanitizer
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserModel>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    // const subscr = this.getUserByToken().subscribe();
    // this.unsubscribe.push(subscr);
  }

  // public methods
  login(username: string, password: string): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(username, password).pipe(
      map((auth: AuthModel) => {
        const result = this.setAuthFromLocalStorage(auth);
        return result;
      }),
      switchMap(() => this.getUserByUsername(username)),
      switchMap(() => this.getUserPicture()),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoadingSubject.next(false);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    localStorage.removeItem(`${this.authLocalStorageToken}-user`);
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }

  getUserByUsername(username): Observable<any> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.token) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByUsername(username).pipe(
      map((user: UserModel) => {
        if (user) {
          this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        } else {
          this.logout();
        }
        return user;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUserPicture(): Observable<any> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.token) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserPicture(this.currentUserSubject.value.id).pipe(
      map((res: any) => {
        if (res?.avatar) {
          this.currentUserSubject.value.pic = `${res?.avatar}`;
          this.setUserFromLocalStorage(this.currentUserSubject.value);
        } else {
          this.getImageBase64('./assets/media/users/default.jpg');
        }
        return true;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUserByToken(): UserModel {
    const user = this.getUserFromLocalStorage();
    if (!user) {
      this.logout();
    }
    this.currentUserSubject = new BehaviorSubject<UserModel>(user);
    return user;
  }

  // need create new user then login
  registration(user: UserModel): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.createUser(user).pipe(
      map(() => {
        this.isLoadingSubject.next(false);
      }),
      switchMap(() => this.login(user.email, user.password)),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  forgotPassword(username: string): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.forgotPassword(username).pipe(
        map((res: any) => {
          // console.log(res);          
          return true;
        }),
        catchError((err) => {
          // console.error('err', err);
          return of(undefined);
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

  resetPassword(token: string, id: number, password: string ): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.resetPassword(token, id, password).pipe(
        map((res: any) => {
          // console.log(res);          
          return true;
        }),
        catchError((err) => {
          // console.error('err', err);
          return of(undefined);
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

  getAuthFromLocalStorage(): AuthModel {
    try {
      const authData = JSON.parse(
        localStorage.getItem(this.authLocalStorageToken)
      );
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  getUserFromLocalStorage(): UserModel {
    try {
      const authData = JSON.parse( localStorage.getItem(`${this.authLocalStorageToken}-user`) );
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  // private methods
  private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (!!auth?.token) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }

  private setUserFromLocalStorage(user: UserModel): boolean {
    if (!!user?.id) {
      localStorage.setItem(`${this.authLocalStorageToken}-user`, JSON.stringify(user));
      return true;
    }
    return false;
  }

  private getImageBase64(imageUrl: string) {
    return this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.currentUserSubject.value.pic = base64Data;
      this.setUserFromLocalStorage(this.currentUserSubject.value);
    });
  }

  private getBase64ImageFromURL(url: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = err => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  private getBase64Image(img: HTMLImageElement): string {
    var canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let dataURL: string = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
