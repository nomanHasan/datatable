import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, HostListener, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'no-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderRowComponent implements OnInit {


  @Input() columns;


  @Output() columnChanged = new EventEmitter<any>();

  mouseEvent: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit() {
  }


  @HostListener('mousemove', ['$event']) mousemove(event) {

    this.mouseEvent.next(event);

  }

  @HostListener('mouseup', ['$event']) mouseup(event) {

    this.mouseEvent.next(event);

  }

  onColumnChanged(event) {
    this.columnChanged.emit(event);
  }

}
