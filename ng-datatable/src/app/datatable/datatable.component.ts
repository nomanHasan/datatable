import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'no-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {


  _tableData;
  @Input() set tableData(value) {
    this._tableData = value;
  }

  get tableData() {
    return this._tableData;
  }

  _columns;
  @Input() set columns(value) {
    this._columns = value;
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

  @ViewChild('header') header: Component;
  @ViewChild('search') search: Component;
  @ViewChild('body') body: Component;
  @ViewChild('footer') footer: Component;
  @ViewChild('bottomBorder') bottomBorder: Component;

  constructor() { }

  ngOnInit() {
    console.log(this.header.el.nativeElement, this.search.el.nativeElement, this.body.el.nativeElement, this.footer.el.nativeElement);
  }

  onBottomScroll(event) {
    this.header.el.nativeElement
    .scrollLeft = this.search.el.nativeElement.
    scrollLeft = this.body.el.nativeElement.
    scrollLeft = this.footer.el.nativeElement.
    scrollLeft = event.target.
    scrollLeft;

    console.log(event.target.
      scrollLeft, this.header.el.nativeElement);
  }

  onRightScroll(event) {

  }

}
