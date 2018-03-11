import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ComponentRef, ChangeDetectionStrategy } from '@angular/core';
import { TableStore } from './store/table.store';

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
    // console.log(this.header.el.nativeElement, this.search.el.nativeElement, this.body.el.nativeElement, this.footer.el.nativeElement);
    this.store.rows$.subscribe(value => {
      console.log(value);
    });

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
    console.log(event);
    this.store.updateColumn(event);
  }

}
