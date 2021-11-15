import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '.';
import { catchError } from 'rxjs/operators';

import { Notify } from '../../../assets/js/layout/extended/messages/notify';
import { MessageBox } from '../../../assets/js/layout/extended/messages/message-box';

@Injectable()
export class HttpsAuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService){ }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const auth = this.auth.getAuthFromLocalStorage();
    const dupReq = req.clone({
      headers: req.headers.set('authorization', (auth?.token) ? 'Bearer ' + auth.token : ''),
    });
    return next.handle(dupReq);
  }
}


@Injectable()
export class HttpsErrorInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if (err.status === 401) {
              // auto logout if 401 response returned from api
              this.auth.logout();
              document.location.reload();
          }
          
          if ([409, 400, 500 ].includes(err.status)) {
            new MessageBox({ 
              title: 'Erro', 
              message: err.error.errors[0].detail, 
              type: 'danger' 
            }).show();              
          }            

          const error = err.error.message || err.statusText;
          return throwError(error);
      }))
    }
}

@NgModule({
  providers: [
    { useClass: HttpsAuthInterceptor, provide: HTTP_INTERCEPTORS,  multi: true },
    { useClass: HttpsErrorInterceptor, provide: HTTP_INTERCEPTORS,  multi: true },
  ],
})

export class Interceptor { }