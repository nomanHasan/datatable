import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data/table-data.model';
import { createColumnWithConfig } from '../datatable/models/columns/column.factory';
import * as localforage from 'localforage';

@Component({
  selector: 'no-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {


  rowNumber = 500000;
  columnNumber = 10;

  combinedData;

  tableData;
  columns;

  constructor() { }

  ngOnInit() {


    console.time('GET TD');

    const key = `${this.columnNumber}x${this.rowNumber}`;


    (async () => {
      const data = await localforage.getItem(key);

      if (data) {
        this.combinedData = data;
      } else {
        this.combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);
        console.log('Data Generation Succesfull', this.combinedData);
        await localforage.setItem(key, this.combinedData);
      }
    })().then(() => {
      console.timeEnd('GET TD');

      this.tableData = this.combinedData.tableData;


      this.columns = this.combinedData.columns.map(c => (
        createColumnWithConfig({
          name: c,
          width: 400
        })
      ));

    });

    // if (localStorage.getItem(key)) {
    //   this.combinedData = JSON.parse(localStorage.getItem(key));
    // } else {
    //   this.combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);
    //   localStorage.setItem(key, JSON.stringify(this.combinedData));
    // }



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
