import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'no-cell',
  templateUrl: './table-body-cell.component.html',
  styleUrls: ['./table-body-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {


  @Input() data;
  @Input() column;

  @HostBinding('style.width') get width() {
    return this.column.width || 100;
  }

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('CELL INIT');
    // this.cd.detach();
  }

}
