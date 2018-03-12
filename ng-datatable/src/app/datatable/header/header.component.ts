import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'no-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() columns;
  @Output() columnChanged = new EventEmitter<any>();
  @Output() action = new EventEmitter<any>();

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

  onColumnChanged(event) {
    this.columnChanged.emit(event);
  }

  onAction(event) {
    this.action.emit(event);
  }

}
