import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data/table-data.model';

@Component({
  selector: 'no-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {


  rowNumber = 2000;
  columnNumber = 100;

  combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);

  tableData;
  columns;

  constructor() { }

  ngOnInit() {

    this.tableData = this.combinedData.tableData;
    this.columns = this.combinedData.columns.map(c => ({
      name: c,
      width: 200
    }));

    console.log(this.tableData, this.columns);

  }

}
