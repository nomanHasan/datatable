import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'no-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {


  _tableData;
  @Input() set tableData(value) {
    this._tableData = value;
  }

  get tableData() {
    return this._tableData;
  }

  _columns;
  @Input() set columns(value) {
    this._columns = value;
  }

  get columns() {
    return this._columns;
  }

  _config;
  @Input() set config(value) {
    this._config = value;
  }

  get config() {
    return this._config;
  }

  constructor() { }

  ngOnInit() {

  }

}
