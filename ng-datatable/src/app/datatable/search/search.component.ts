import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'no-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {


  @Input() columns;
  @Input() visibleColumns;
  @Input() viewportColumns;


  @Output() action = new EventEmitter<any>();

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

}
