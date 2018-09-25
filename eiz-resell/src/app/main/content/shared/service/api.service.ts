import {HttpClient, HttpParams, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';

import {environment} from '../../../../../environments/environment';
import {Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    url: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.url = environment.apiUrl;
    }

    public get(endpoint: string, target: string, param?: string, query?: any, httpOption?: any): Observable<any> {

        let resourceUrl = this.url + '/' + endpoint + '/' + target;
        if (param) {
            resourceUrl += '/' + param;
        }

        return this.httpClient
            .get(resourceUrl, {params: query})
            .pipe(
                catchError(this.handleError)
            );
    }

    public post(endpoint: string, target: string, param?: string, data?: any, httpOption?: any): Observable<any> {

        let resourceUrl = this.url + '/' + endpoint + '/' + target;
        // if (endpoint === 'oauth') {
        //     resourceUrl = this.url + '/' + target;
        // }

        if (param) {
            resourceUrl += '/' + param;
        }
        console.log(data);
        console.log(httpOption);
        return this.httpClient
            .post(resourceUrl, data, httpOption)
            .pipe(
                catchError(this.handleError)
            );
    }

    public put(endpoint: string, target: string, param?: string, data?: any, httpOption?: any): Observable<any> {

        let resourceUrl = this.url + '/' + endpoint + '/' + target;
        if (endpoint === 'auth') {
            resourceUrl = this.url + '/' + target;
        }

        if (param) {
            resourceUrl += '/' + param;
        }

        return this.httpClient
            .put(resourceUrl, data)
            .pipe(
                catchError(this.handleError)
            );
    }

    public delete(endpoint: string, target: string, param?: string, data?: any, httpOption?: any): Observable<any> {

        let resourceUrl = this.url + '/' + endpoint + '/' + target;
        if (endpoint === 'auth') {
            resourceUrl = this.url + '/' + target;
        }

        if (param) {
            resourceUrl += '/' + param;
        }
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            body: data
        };

        return this.httpClient
            .delete(resourceUrl, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {

        let errorMessage;

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            errorMessage = error.error.message;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            errorMessage = error.error;
        }

        // return an observable with a user-facing error message
        return throwError(errorMessage);
    }
}
