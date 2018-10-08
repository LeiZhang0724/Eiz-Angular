import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../../shared/service/account.service';
import {ActivatedRoute} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {

  account: any;
    account_id: number;
    account_email: string;

    constructor(
        private route: ActivatedRoute,
        private accountService: AccountService,

        public dialogRef: MatDialogRef<TopupComponent>,
        public dialog: MatDialog,
        @Inject (MAT_DIALOG_DATA)  data,
    ) {
        this.account_id = data.id;
        this.account_email = data.email;
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }
}