import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AccountService} from '../../../shared/service/account.service';
import {ActivatedRoute} from '@angular/router';
import {PeriodicElement2} from '../view/view.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    account: any;
    account_id: number;
    account_email: string;
    user: any;

    constructor(
        private route: ActivatedRoute,
        private accountService: AccountService,

        public dialogRef: MatDialogRef<EditComponent>,
        public dialog: MatDialog,
        @Inject (MAT_DIALOG_DATA)  data
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


