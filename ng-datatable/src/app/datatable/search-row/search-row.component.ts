import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'no-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchRowComponent implements OnInit {


  @Input() columns;
  @Input() visibleColumns;
  @Input() viewportColumns;


  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.columns);
  }

  onAction(event) {
    this.action.emit(event);
  }

}
