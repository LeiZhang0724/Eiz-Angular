import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Location} from '@angular/common';

@Component({
  selector: 'eiz-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.css']
})
export class ConsignmentsComponent implements OnInit {

    displayedColumns: string[] = ['id', 'tracking', 'cost', 'printed', 'shipped', 'action'];
    dataSource = ELEMENT_DATA;

    selection = new SelectionModel<PeriodicElement>(true, []);

    constructor(
        private location: Location
    ) {
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

    backToManifest() {
        this.location.back();
    }

}

export interface PeriodicElement {
    id: number;
    tracking: string;
    cost: number;
    printed: boolean;
    shipped: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: true},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: false, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: true},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: false, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: true},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: false, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: false, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: false, shipped: false},
    {id: 1, tracking: '3WP200023201000965004', cost: 5.24, printed: true, shipped: false},
];

