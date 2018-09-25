import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {console.log(123);
            const cloned = req.clone({
                headers: req.headers
                    .set('Authorization', 'Bearer ' + token)
                    .set('Content-Type', 'application/json; charset=UTF-8')
            });
            return next.handle(cloned);
        } else {console.log(456);console.log(req);
            return next.handle(req);
        }
    }
}
