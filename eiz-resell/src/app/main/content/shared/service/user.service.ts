import {Injectable} from '@angular/core';
import * as moment from 'moment-timezone';
import {ApiService} from './api.service';
import {environment} from '../../../../../environments/environment';
import {Account} from '../../entity/account.model';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    account: Account;

    constructor(
        private apiService: ApiService
    ) {
    }

    public login(data: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/x-www-form-urlencoded',
                // 'Authorization': 'Basic ' + btoa( 'eiz-client:eiz-secret')
            })
        };

        let postBody = new HttpParams();
        postBody = postBody.set('username', data.username);
        postBody = postBody.set('password', data.password);
        postBody = postBody.set('grant_type', 'password');
        // postBody = postBody.set('client_id', 'eiz-client');

        return this.apiService.post(environment.services.account, 'oauth/token', null, postBody, httpOptions)
            .subscribe(
                res => {console.log('login ok');
                    this.setSession(res);
                },
                error => {console.log('login error');

                });
    }

    public test(): Observable<any> {
        return this.apiService.get(environment.services.resell, 'api/test', null, null);
    }

    public isAuthenticated(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem('token') || !this.isExpiration) {
                resolve(false);
            } else if (this.isActive()) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }

    private isActive() {
        const activeTime = this.getStorageTime('expires_at');
        const now = moment().subtract(1, 'm');
        if (now.isBefore(activeTime)) {
            return true;
        } else {
            return false;
        }
    }

    private isExpiration() {
        const expirationTime = this.getStorageTime('refresh_expires_at');
        const now = moment().subtract(1, 'm');
        if (now.isBefore(expirationTime)) {
            return true;
        } else {
            return false;
        }
    }

    private getStorageTime(itemName: string) {
        const item = JSON.parse(localStorage.getItem(itemName));
        return moment(item);
    }

    private setSession(authResult) {
        const expiresAt = moment.tz(authResult.expiration, 'Australia/Melbourne');
        const activeAt = moment.tz(authResult.refreshToken.expiration, 'Australia/Melbourne');
        localStorage.setItem('token', authResult.value);
        localStorage.setItem('authResult.refreshToken.expiration', JSON.stringify(activeAt.valueOf()));
        localStorage.setItem('authResult.expiration', JSON.stringify(expiresAt.valueOf()));

        this.setAccount(authResult.additionalInformation);
    }

    private setAccount(account) {
        this.account = new Account(account);
    }
}
