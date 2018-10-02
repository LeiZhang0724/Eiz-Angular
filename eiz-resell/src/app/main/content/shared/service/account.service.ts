import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountService {

    public accountSubject = new BehaviorSubject<any>(null);
    public accountInformation = this.accountSubject.asObservable();

    constructor() { }

    changeAccount(account) {
        this.accountSubject.next(account);
    }
}




