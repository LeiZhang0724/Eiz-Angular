import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {reject, resolve} from 'q';
import {environment} from '../../../../../environments/environment';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.router.navigate(['/redirect']);
        return false;
        // return this.userService.isAuthenticated().then(
        //         (res) => {
        //             if (res) {
        //                 return true;
        //             } else {
        //                 this.router.navigate(['/redirect']);
        //                 return false;
        //             }
        //         }
        //     );
        // if (this.authService.isAuthenticated()){
        //   return true;
        // }
        // return this.authService.isAuthenticated();
        // not logged in so redirect to login page
        //
        // return false;
    }
}
