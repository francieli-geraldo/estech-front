import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '.';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService){ }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const auth = this.auth.getAuthFromLocalStorage();
    const dupReq = req.clone({
      headers: req.headers.set('authorization', (auth?.token) ? 'Bearer ' + auth.token : ''),
    });
    return next.handle(dupReq);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})

export class Interceptor { }