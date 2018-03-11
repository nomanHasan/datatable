import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data/table-data.model';
import { createColumnWithConfig } from '../datatable/models/columns/column.factory';

@Component({
  selector: 'no-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {


  rowNumber = 200;
  columnNumber = 100;

  combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);

  tableData;
  columns;

  constructor() { }

  ngOnInit() {

    this.tableData = this.combinedData.tableData;

    this.columns = this.combinedData.columns.map(c => (
      createColumnWithConfig({
          name: c,
          width: 200
        })
      ));

    // setInterval(() => {
    //   this.combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);
    //   this.tableData = this.combinedData.tableData;
    //   this.columns = this.combinedData.columns.slice(0, parseInt(Math.random() * 99, 10)).map(c => ({
    //     name: c,
    //     width: 200
    //   }));
    //   console.log(this.columns);
    // }, 10000);

  }

}
