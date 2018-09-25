import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {PeriodicElement} from '../openmanifest/openmanifest.component';

@Component({
  selector: 'app-closedmanifest',
  templateUrl: './closedmanifest.component.html',
  styleUrls: ['./closedmanifest.component.css']
})
export class ClosedmanifestComponent implements OnInit {

    displayedColumns: string[] = ['id', 'courier', 'createdate', 'consignmentnum', 'action'];
    dataSource = ELEMENT_DATA;
    selection = new SelectionModel<PeriodicElement>(true, []);

    constructor() {
    }

    ngOnInit() {
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.forEach(row => this.selection.select(row));
    }

}

export interface PeriodicElement {
    id: number;
    courier: number;
    createdate: string;
    consignmentnum: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, courier: 1, createdate: '2018-09-12 14:35:45', consignmentnum: 12},
    {id: 1, courier: 2, createdate: '2018-09-11 14:35:45', consignmentnum: 16},
    {id: 1, courier: 1, createdate: '2018-09-12 14:35:45', consignmentnum: 2},
    {id: 1, courier: 2, createdate: '2018-09-04 14:35:45', consignmentnum: 7},
    {id: 1, courier: 1, createdate: '2018-09-22 14:35:45', consignmentnum: 9},
    {id: 1, courier: 2, createdate: '2018-09-26 14:35:45', consignmentnum: 26},
    {id: 1, courier: 1, createdate: '2018-09-12 14:35:45', consignmentnum: 32},
];
