import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data/table-data.model';

@Component({
  selector: 'no-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {


  rowNumber = 200;
  columnNumber = 100;

  wholeData = TableData.getTableData(this.rowNumber, this.columnNumber);

  tableData;
  columns;

  constructor() { }

  ngOnInit() {

    this.tableData = this.wholeData.tableData;
    this.columns = this.wholeData.columns.map(c => ({
      name: c
    }));

    console.log(this.tableData, this.columns);

  }

}
