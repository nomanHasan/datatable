import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'no-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBodyComponent implements OnInit {


  @Input() rows;
  @Input() visibleRows;
  @Input() viewportRows;

  @Input() visibleHeight;



  @Input() columns;
  @Input() visibleColumns;
  @Input() viewportColumns;
  @Input() visibleWidth;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.rows, this.visibleRows, this.visibleRows);
  }

  rowTrackerFn(index, row) {
    return row ? row.key : undefined;
  }

}
