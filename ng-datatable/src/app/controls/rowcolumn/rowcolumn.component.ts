import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rowcolumn',
  templateUrl: './rowcolumn.component.html',
  styleUrls: ['./rowcolumn.component.scss']
})
export class RowcolumnComponent implements OnInit {


  @Input() rowNumber: number | string;

  @Output() rowNumberChange = new EventEmitter<number>();

  @Input() columnNumber: number | string;

  @Output() columnNumberChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  changeRowNumber(event) {
    this.rowNumber = event;
    console.log(event);
    this.rowNumberChange.emit(event);
  }

  changeColumnNumber(event) {
    this.columnNumber = event;
    this.columnNumberChange.emit(event);
  }

}
