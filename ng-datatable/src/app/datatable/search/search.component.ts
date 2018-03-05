import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'no-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {


  @Input() columns;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

}
