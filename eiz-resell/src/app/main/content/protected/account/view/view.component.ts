import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {AccountService} from '../../../shared/service/account.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @ViewChild('chooseFile') chooseFile: ElementRef;
  @ViewChild('fileName') fileName: ElementRef;

  account: any;
  account_id: number;

  displayedColumnsPlugins: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA_Plugins;
  selection = new SelectionModel<PeriodicElement>(true, []);

  dataSource2;

  displayedColumnsAccount: string[] = ['id', 'email'];

    constructor(
      private route: ActivatedRoute,
      private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.account_id = res.account);
    this.accountService.accountInformation.subscribe(res => this.account = res);

    const ELEMENT_DATA_Account: PeriodicElement2[] = [
        {id: this.account.id, email: this.account.email}
    ];
    this.dataSource2 = ELEMENT_DATA_Account;
  }
}
export interface PeriodicElement {
  id: number;
  name: string;
}


const ELEMENT_DATA_Plugins: PeriodicElement[] = [
    {id: 1, name: 'Orders'},
    {id: 2, name: 'Fastway'},
    {id: 3, name: 'eParcel'},
];

export interface PeriodicElement2 {
    id: number;
    email: string;
}

