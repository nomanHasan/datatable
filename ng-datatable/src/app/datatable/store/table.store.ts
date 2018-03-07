import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RowState } from '../models/row/row-state.model';
import { SchemaMapper } from './schema-mapper';
import { TableState, initializeTableState } from '../models/table-state.model';

@Injectable()
export class TableStore {

  schemaMapper: SchemaMapper = new SchemaMapper();

  constructor() {

  }

  private rowSubject = new BehaviorSubject<RowState[]>(undefined);

  rows$: Observable<RowState[]> = this.rowSubject.asObservable();

  private columnSubject = new BehaviorSubject<any[]>(undefined);

  columns$: Observable<any[]> = this.columnSubject.asObservable();

  private scrollSubject = new BehaviorSubject<any>(undefined);

  scroll$: Observable<any> = this.scrollSubject.asObservable();

  private tableStateSubject = new BehaviorSubject<TableState>(initializeTableState());

  tableState$: Observable<any> = this.tableStateSubject.asObservable();

  tableState: TableState;

  setRows(rowsData) {

    const rows: RowState[] = this.schemaMapper.fromTabledata(rowsData);
    console.log(rowsData);

    this.tableState = this.tableStateSubject.getValue();

    this.tableState = {
      ...this.tableState,
      rows: rows
    };


    console.log(this.tableState);

    if (this.tableState.columns && this.tableState.columns.length > 0) {
      this.tableStateSubject.next(this.tableState);
    }

  }

  setColumns(columns) {
    // this.columnSubject.next(columns);


    const scroll = {
      width: columns.reduce((sum, c) => {
        sum += c.width;
        return sum;
      }, 0) + 50
    };
    // this.scrollSubject.next(scroll);

    this.tableState = {
      ...this.tableState,
      columns: columns,
      scroll: scroll
    };

    if (this.tableState.rows && this.tableState.rows.length > 0) {
      this.tableStateSubject.next(this.tableState);
    }

  }



}
