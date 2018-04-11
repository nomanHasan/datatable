import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RowState } from '../models/row/row-state.model';
import { SchemaMapper } from './schema-mapper';
import { TableState, initializeTableState } from '../models/table-state.model';
import { Column } from '../models/columns/column.model';
import { Action } from './actions/action.model';
import { tableReducer } from './reducers/table.reducer';

@Injectable()
export class TableStore {

  schemaMapper: SchemaMapper = new SchemaMapper();

  constructor() {

  }

  // private rowSubject = new BehaviorSubject<RowState[]>(undefined);

  // rows$: Observable<RowState[]> = this.rowSubject.asObservable();

  // private columnSubject = new BehaviorSubject<any[]>(undefined);

  // columns$: Observable<any[]> = this.columnSubject.asObservable();

  // private scrollSubject = new BehaviorSubject<any>(undefined);

  // scroll$: Observable<any> = this.scrollSubject.asObservable();

  private tableStateSubject = new BehaviorSubject<TableState>(initializeTableState());

  tableState$: Observable<any> = this.tableStateSubject.asObservable();

  tableState: TableState = initializeTableState();

  setRows(rowsData) {

    const rows: RowState[] = this.schemaMapper.fromTabledata(rowsData);

    const {rowCollectionMap, visibleRows, viewportRows } = this.schemaMapper.flatMapRows(rows, 'index');

    this.tableState = {
      ...this.tableState,
      rows: rowCollectionMap,
      visibleRows, viewportRows,
      visibleHeight: visibleRows.reduce((accm, obj) => accm + 40, 0),
      columns: {
        ...this.tableState.columns,
        ...this.schemaMapper.assignPositionX(this.tableState.visibleColumns, this.tableState.columns)
      }
    };

    console.log(this.tableState.columns);

    if (this.tableState.columns) {
      this.tableStateSubject.next(this.tableState);
    }

  }

  setColumns(cols) {
    console.log(cols);
    const { columns, visibleColumns, viewportColumns } = this.schemaMapper.flattenColumns(cols);

    const scroll = {
      width: cols.reduce((sum, c) => {
        sum += c.width;
        return sum;
      }, 0) + 50
    };

    this.tableState = {
      ...this.tableState,
      columns,
      viewportColumns,
      visibleColumns,
      visibleWidth: visibleColumns.reduce((accm, obj) => {
        accm += columns[obj].width;
        return accm;
      }, 0) + 50,
      scroll
    };

    if (this.tableState.rows ) {
      this.tableStateSubject.next(this.tableState);
    }

  }

  // updateColumn(column: Column) {
  //   let col = this.tableState.columns.find(c => c.name === column.name);
  //   // column.width = column.dividerState.left + column.dividerState.leftOffset;
  //   col = {
  //     ...col,
  //     ...column
  //   };
  //   this.tableState = {
  //     ...this.tableState,
  //     columns: [
  //       ...this.tableState.columns
  //     ]
  //   };
  //   this.tableStateSubject.next(this.tableState);
  // }

  dispatch(action: Action) {
    this.tableState = tableReducer(this.tableState, action);
    console.log(this.tableState, action);
    this.tableStateSubject.next(this.tableState);
  }



}
