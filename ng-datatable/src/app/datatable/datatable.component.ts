import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ComponentRef, ChangeDetectionStrategy } from '@angular/core';
import { TableStore } from './store/table.store';
import { COLUMN_RESIZE, SortColumn } from './store/actions/column.action';
import * as ScrollActions from './store/actions/body/scroll.action';
import { Subject } from 'rxjs';


enum ScrollTypes {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
  NONE = 'NONE'
}

@Component({
  selector: 'no-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [TableStore],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit {

  _columns;
  @Input() set columns(value) {
    this._columns = value;
    this.store.setColumns(this._columns);
  }

  get columns() {
    return this._columns;
  }

  _tableData;
  @Input() set tableData(value) {
    this._tableData = value;
    this.store.setRows(this._tableData);
  }

  get tableData() {
    return this._tableData;
  }

  _config;
  @Input() set config(value) {
    this._config = value;
  }

  get config() {
    return this._config;
  }

  scrollState = {
    left: 0,
    top: 0
  };


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

    // this.store.setRows(this.tableData);
    // this.store.setColumns(this.columns.slice(0, 10));

    this.scrollObj.debounceTime(50).distinctUntilChanged().subscribe(res => {

    //   this.body.el.nativeElement.
    // scrollLeft = res.scrollLeft;
      // this.syncScrollLeft();
      this.store.dispatch(res);

    });

  }

  syncScrollLeft(scrollLeft = this.bottomBorder.nativeElement.scrollLeft) {
    console.log(this.bottomBorder.nativeElement);
    this.header.el.nativeElement.scrollLeft = scrollLeft;
    this.search.el.nativeElement.scrollLeft = scrollLeft;
    this.body.el.nativeElement.scrollLeft = scrollLeft;
    this.footer.el.nativeElement.scrollLeft = scrollLeft;
  }

  onBottomScroll(event) {
    const scrollLeft = event.target.scrollLeft;

    this.syncScrollLeft(scrollLeft);

    const tbody = this.body.el.nativeElement;

    this.scrollState = {
      ...this.scrollState,
      left: tbody.scrollLeft
    };

    // console.log({
    //   scrollLeft: event.target.scrollLeft, width: tbody.getBoundingClientRect().width
    // });

    this.scrollSubject.next(new ScrollActions.HorizontalScroll({
      scrollLeft: tbody.scrollLeft, width: tbody.getBoundingClientRect().width
    }));

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

  // tslint:disable-next-line:member-ordering
  scrollSubject = new Subject<any>();
  // tslint:disable-next-line:member-ordering
  scrollObj = this.scrollSubject.asObservable();


  onTableBodyScroll(event) {

    const tbody = this.body.el.nativeElement;

    const scrollType = this.scrollState.top !== tbody.scrollTop ? ScrollTypes.VERTICAL : (
      this.scrollState.left !== tbody.scrollLeft ? ScrollTypes.HORIZONTAL : ScrollTypes.NONE
    );

    this.scrollState = {
      top: tbody.scrollTop,
      left: tbody.scrollLeft
    };


    if (scrollType === ScrollTypes.VERTICAL) {
      this.scrollSubject.next(new ScrollActions.VerticalScroll({
        scrollTop: tbody.scrollTop, height: tbody.getBoundingClientRect().height
      }));
    } else if (scrollType === ScrollTypes.HORIZONTAL) {
      this.scrollSubject.next(new ScrollActions.HorizontalScroll({
        scrollLeft: tbody.scrollLeft, width: tbody.getBoundingClientRect().width
      }));
    }

  }

}
