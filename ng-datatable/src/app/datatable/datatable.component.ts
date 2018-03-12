import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ComponentRef, ChangeDetectionStrategy } from '@angular/core';
import { TableStore } from './store/table.store';
import { COLUMN_RESIZE, SortColumn } from './store/actions/column.action';

@Component({
  selector: 'no-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [TableStore],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit {


  _tableData;
  @Input() set tableData(value) {
    this._tableData = value;
    this.store.setRows(this._tableData);
  }

  get tableData() {
    return this._tableData;
  }

  _columns;
  @Input() set columns(value) {
    this._columns = value;
    this.store.setColumns(this._columns);
    console.log(value);
  }

  get columns() {
    return this._columns;
  }

  _config;
  @Input() set config(value) {
    this._config = value;
  }

  get config() {
    return this._config;
  }

  @ViewChild('header') header: any;
  @ViewChild('search') search: any;
  @ViewChild('body') body: any;
  @ViewChild('footer') footer: any;
  @ViewChild('bottomBorder') bottomBorder: any;

  constructor(
    public store: TableStore
  ) { }

  ngOnInit() {
    this.store.tableState$.subscribe(res => console.log(res));

    this.store.setRows(this.tableData);
    // this.store.setColumns(this.columns.slice(0, 10));

  }

  onBottomScroll(event) {
    this.header.el.nativeElement
    .scrollLeft = this.search.el.nativeElement.
    scrollLeft = this.body.el.nativeElement.
    scrollLeft = this.footer.el.nativeElement.
    scrollLeft = event.target.
    scrollLeft;
  }

  onRightScroll(event) {

  }

  onColumnChanged(event) {

    this.store.dispatch({
      type: COLUMN_RESIZE,
      payload: {
        column: event,
        dividerState: event.dividerState
      }
    });
    // this.store.updateColumn(event);
  }

  onAction(event) {
    this.store.dispatch(event);
  }

}
