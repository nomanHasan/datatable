import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data/table-data.model';
import { List, Map, fromJS} from 'immutable';
import {timer} from './timer';

@Component({
  selector: 'no-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {


  rowNumber = 200000;
  columnNumber = 10;


  combinedData = TableData.getTableData(this.rowNumber, this.columnNumber);
  tableData;
  columns;
  im_tableData;


  constructor() { }


  ngOnInit() {
    console.log(this.combinedData);

    this.tableData = this.combinedData.tableData;
    this.columns = this.combinedData.columns;


    let time =  timer('Immtutable From JS');
    this.im_tableData = List(fromJS(this.tableData));
    console.log(time.stop());

    console.log(this.im_tableData.get(this.columns[0]), this.columns[0]);




    console.log(this.tableData);

    time = timer('Immutable normal Sort');
    let  sortedData = this.tableData.map(d => ({...d})).sort((a, b) => a[this.columns[1]].localeCompare(b[this.columns[1]]));
    console.log(time.stop());


    console.log(this.tableData);

    time = timer('Immutable JS Sort');
    sortedData = this.im_tableData.sort((a, b) => a.get(this.columns[1]).localeCompare(b.get(this.columns[1])));
    console.log(time.stop());


    console.log(this.im_tableData);


    // time = timer('Mutable Sort');
    // sortedData = this.tableData.sort((a, b) => a[this.columns[1]].localeCompare(b[this.columns[1]]));
    // console.log(time.stop());

  }

}
