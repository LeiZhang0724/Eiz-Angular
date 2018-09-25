import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Params, Router, UrlSegment} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommonConfig} from '../content/shared/config/eiz.common.config';
import {LoginComponent} from '../content/public/login/login.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../content/shared/service/user.service';

@Component({
    selector: 'eiz-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy, AfterViewInit {

    routeSubscription: Subscription;
    useAdminNavBar = false;

    constructor(
        private router: Router,
        public dialog: MatDialog,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url.includes('admin')) {
                this.useAdminNavBar = true;
            }
        });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

    ngAfterViewInit() {
    }

    showLoginDialog(): void {
        const dialogConfig = CommonConfig.getDialogConfig();
        dialogConfig.width = '400px';

        const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    test() {
        this.userService.test().subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        );
    }



}
