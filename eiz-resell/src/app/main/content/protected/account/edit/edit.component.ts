import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AccountService} from '../../../shared/service/account.service';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    account: any;
    account_id: number;
    account_email: string;
    editForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private accountService: AccountService,

        public dialogRef: MatDialogRef<EditComponent>,
        public dialog: MatDialog,
        @Inject (MAT_DIALOG_DATA)  data,
        private formBuilder: FormBuilder,
        ) {
      this.account_id = data.id;
      this.account_email = data.email;
  }

  ngOnInit() {

      this.editForm = this.formBuilder.group({
          account_id   : ['', [Validators.required]],
          account_email: ['', Validators.required],
      });
  }

    close() {
        this.dialogRef.close();
    }
}


