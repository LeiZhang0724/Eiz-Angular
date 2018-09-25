import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../../shared/service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'eiz-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private router: Router,
        private userService: UserService,
        public dialogRef: MatDialogRef<LoginComponent>,
    ) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username : new FormControl('', [Validators.required]),
            password : new FormControl('', Validators.required)
        });
    }

    login() {
        this.userService.login(this.loginForm.getRawValue());
        // this.dialogRef.close();
        // this.router.navigate(['/admin']);

    }

}
