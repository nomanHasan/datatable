import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RowState } from '../models/row/row-state.model';
import { Column } from '../models/columns/column.model';

@Component({
  selector: 'no-table-body-row',
  templateUrl: './table-body-row.component.html',
  styleUrls: ['./table-body-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {


  @Input() row: RowState;
  @Input() columns: Column[];

  constructor() { }

  ngOnInit() {

    console.log('Row Init');

  }

  columnTracker(index, column: Column) {
    return column ? column.name : undefined;
  }

}
