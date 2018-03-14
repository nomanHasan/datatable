import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    console.log(this.columns);
  }

}
