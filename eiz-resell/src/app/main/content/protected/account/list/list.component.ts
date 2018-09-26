import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @ViewChild('chooseFile') chooseFile: ElementRef;
    @ViewChild('fileName') fileName: ElementRef;

    displayedColumns: string[] = ['id', 'index', 'email', 'action'];
    dataSource = ELEMENT_DATA;

    selection = new SelectionModel<PeriodicElement>(true, []);

    constructor() {
    }

    ngOnInit() {
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
