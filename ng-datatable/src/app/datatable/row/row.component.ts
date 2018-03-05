import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'no-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {


  @Input() data;
  @Input() columns;

  constructor() { }

  ngOnInit() {

  }

}
