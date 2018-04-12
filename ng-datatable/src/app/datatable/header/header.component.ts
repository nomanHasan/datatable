import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, EventEmitter, Output } from '@angular/core';
import { DividerConfig } from '../models/columns/divider-config.model';
import { Column } from '../models/columns/column.model';


@Component({
  selector: 'no-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() columns: Column;
  @Input() dividerConfig: DividerConfig;
  @Input() visibleColumns;
  @Input() viewportColumns;
  @Input() visibleWidth;

  @Output() action = new EventEmitter<any>();

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

  onAction(event) {
    this.action.emit(event);
  }

}
