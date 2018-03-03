import { Component, OnInit } from '@angular/core';
import * as randomWords from 'random-words';
import { TableData } from '../table-data/table-data.model';


@Component({
  selector: 'app-plain-table',
  templateUrl: './plain-table.component.html',
  styleUrls: ['./plain-table.component.scss']
})
export class PlainTableComponent implements OnInit {

  constructor() { }

  rowNumber = 100;
  columnNumber = 10;

  tableData = TableData.getTableData(this.rowNumber, this.columnNumber);

  ngOnInit() {

  }

  render() {
    this.tableData = TableData.getTableData(this.rowNumber, this.columnNumber);

    console.log(this.rowNumber, this.columnNumber, this.tableData);
  }

}
