import {Component, OnInit} from '@angular/core';
import {UserService} from './main/content/shared/service/user.service';
import {resolve} from 'q';
import {Router} from '@angular/router';

@Component({
    selector: 'eiz-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isAuthenticated = false;

    constructor(
        private router: Router,
        private userService: UserService
    ) {

    }

    ngOnInit(): void {
        this.userService.isAuthenticated().then(
            (res) => {
                if (res) {
                    // this.router.navigate(['/pages/login'], {queryParams: {returnUrl: state.url}});
                    resolve(true);
                } else {
                    // this.router.navigate(['/pages/login'], {queryParams: {returnUrl: state.url}});
                    resolve(false);
                }
            }
        );
    }
}
