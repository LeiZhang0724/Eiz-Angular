import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    isLinear = true;
    // accountFormGroup: FormGroup;
    // subscriptionFormGroup: FormGroup;

    // Regex
    // emailRegex = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))' +
    //     '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

    emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    accountFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        companyName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        // email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
        ABN: ['', Validators.required],
        status: ['', Validators.required],
        companyAddress1: ['', Validators.required],
        suburb: ['', Validators.required],
        state: ['', Validators.required],
        postcode: ['', Validators.required],
        country: ['', Validators.required],
    });
    subscriptionFormGroup = this.formBuilder.group({
        subscription: ['', Validators.required],
        API: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
        // this.accountFormGroup = this.formBuilder.group({
        //     name: ['', Validators.required],
        //     companyName: ['', Validators.required],
        //     phone: ['', Validators.required],
        //     email: ['', Validators.required, Validators.pattern(this.emailRegex)],
        //     ABN: ['', Validators.required],
        //     status: ['', Validators.required],
        //     companyAddress1: ['', Validators.required],
        //     suburb: ['', Validators.required],
        //     state: ['', Validators.required],
        //     postcode: ['', Validators.required],
        //     country: ['', Validators.required],
        // });
        // this.subscriptionFormGroup = this.formBuilder.group({
        //     subscription: ['', Validators.required]
        // });
    }

    get email() {
        return this.accountFormGroup.get('email');
    }

}
