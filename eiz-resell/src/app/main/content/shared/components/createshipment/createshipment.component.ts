import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'eiz-createshipment',
    templateUrl: './createshipment.component.html',
    styleUrls: ['./createshipment.component.css']
})
export class CreateShipmentComponent implements OnInit {

    displayedColumns: string[] = ['position', 'name', 'weight'];
    dataSource = ELEMENT_DATA;

    constructor() {
    }

    ngOnInit() {
    }

}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}
];
