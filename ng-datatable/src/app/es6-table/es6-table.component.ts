import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TableData} from '../table-data/table-data.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-es6-table',
  templateUrl: './es6-table.component.html',
  styleUrls: ['./es6-table.component.scss']
})
export class Es6TableComponent implements OnInit {

  constructor() { }

  rowNumber = 100;
  columnNumber = 10;

  tableData = TableData.getPlainArray(100, 10);

  tableElement;

  ngOnInit() {
    this.tableElement = document.querySelector('#table');
    this.tableData = TableData.getPlainArray(this.rowNumber, this.columnNumber);
    const tableHTML = getTableHtml(this.tableData);
    this.tableElement.innerHTML = tableHTML;
  }

  render() {
    this.tableData = TableData.getPlainArray(this.rowNumber, this.columnNumber);
    const tableHTML = getTableHtml(this.tableData);
    this.tableElement.innerHTML = tableHTML;
  }

}


const getTableHtml = (td) => {
  return td.map((r, i) => {
      if (i === 0 ) {
          return tableRow(r, 'th');
      } else {
          return tableRow(r, 'td');
      }
  }).join('');
};

const tableRow = (tr, tdh = 'td') => {
  return `<tr>${
      tr.map((d) => {
          return tableColumn(d, tdh);
      }).join('')
  }</tr>`;
};

const tableColumn = (td, tdh = 'td') => {
  return `<${tdh}>${td}</${tdh}>`;
};
