import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {AccountService} from '../../../shared/service/account.service';
import {EditComponent} from '../edit/edit.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @ViewChild('chooseFile') chooseFile: ElementRef;
    @ViewChild('fileName') fileName: ElementRef;

    displayedColumns: string[] = ['id', 'index', 'email', 'action'];
    dataSource;


    selection = new SelectionModel<PeriodicElement>(true, []);

    dialogRef: any;

    constructor(
        private data: AccountService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.dataSource = ELEMENT_DATA;
    }

    changeAccount(account) {
        this.data.changeAccount(account);
    }


    edit(id) {
        this.dialogRef = this.dialog.open(EditComponent, {
            panelClass: 'user-edit-dialog',
            data: this.dataSource[id - 1],
        });

    }
}

export interface PeriodicElement {
    id: number;
    email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, email: '123@gmail.com'},
    {id: 2, email: '123@gmail.com'},
    {id: 3, email: '123@gmail.com'},
    {id: 4, email: '123@gmail.com'},
    {id: 5, email: '123@gmail.com'},
];
