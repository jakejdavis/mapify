import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { tap } from 'rxjs/operators';
/**
 * Http interceptor for inyecting the OAuth Token on every request
 * source: https://github.com/cyclosproject/ng-swagger-gen#passing-request-headers--customizing-the-request
 */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private oauthService: OAuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
            }
        });

        // Also handle errors globally
        return next.handle(req).pipe(
            tap(x => x, err => {
                // Handle this err
                console.error(`Error performing request, status code = ${err.status}`);
            })
        );
    }
}
