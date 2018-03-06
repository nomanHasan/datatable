import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RowState } from '../models/row/row-state.model';
import { SchemaMapper } from './schema-mapper';

@Injectable()
export class TableStore {

  schemaMapper: SchemaMapper = new SchemaMapper();

  constructor() {

   }

  private rowSubject = new BehaviorSubject<RowState[]>(undefined);

  rows$: Observable<RowState[]> = this.rowSubject.asObservable();

  private columnSubject = new BehaviorSubject<any[]>(undefined);

  columns$: Observable<any[]> = this.columnSubject.asObservable();


  setRows(rowsData) {

    const rows = this.schemaMapper.fromTabledata(rowsData);
    console.log(rowsData);

    this.rowSubject.next(rows);
  }

  setColumns(columns) {
    this.columnSubject.next(columns);
  }



}
