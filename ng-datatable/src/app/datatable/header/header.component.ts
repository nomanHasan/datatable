import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'no-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() columns;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

}
