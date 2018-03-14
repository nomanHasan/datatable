import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, HostListener, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DividerConfig } from '../models/columns/divider-config.model';

@Component({
  selector: 'no-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderRowComponent implements OnInit {


  @Input() columns;
  @Input() dividerConfig: DividerConfig;
  @Input() visibleColumns;
  @Input() viewportColumns;

  @Output() action = new EventEmitter<any>();


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

  onAction(event) {
    this.action.emit(event);
  }

}
