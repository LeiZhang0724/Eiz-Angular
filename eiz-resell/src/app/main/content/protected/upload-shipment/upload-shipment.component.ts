import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {PeriodicElement} from '../consignments/consignments.component';

@Component({
    selector: 'eiz-upload-shipment',
    templateUrl: './upload-shipment.component.html',
    styleUrls: ['./upload-shipment.component.css']
})
export class UploadShipmentComponent implements OnInit {

    @ViewChild('chooseFile') chooseFile: ElementRef;
    @ViewChild('fileName') fileName: ElementRef;

    displayedColumns: string[] = ['id', 'tracking', 'cost', 'printed', 'shipped', 'action'];
    dataSource = ELEMENT_DATA;

    selection = new SelectionModel<PeriodicElement>(true, []);

    constructor() {
    }

    ngOnInit() {
    }

    fileChangeListener($event) {
        const target = $event.target || $event.srcElement;
        const files = target.files;

        this.fileName.nativeElement.textContent = files[0].name;
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
