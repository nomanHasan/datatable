import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'no-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBodyComponent implements OnInit {


  @Input() tableData;
  @Input() columns;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
    
  }

}
