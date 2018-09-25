import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {HttpUrlEncodingCodec} from '@angular/common/http';

@Component({
    selector: 'eiz-redirect',
    template: 'redirecting...'
})
export class RedirectComponent implements OnInit {
    constructor(
        // private httpUrlEncodingCodec: HttpUrlEncodingCodec
    ) { }

    ngOnInit() {
        const redirectUrl = encodeURIComponent('http://localhost:4200/');
        window.location.href = environment.apiUrl + '/' + environment.services.account + '/signin' + '?service=EIZ Shipping&source=' + redirectUrl;
    }
}
