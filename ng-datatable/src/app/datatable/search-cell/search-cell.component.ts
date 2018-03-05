import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'no-search-cell',
  templateUrl: './search-cell.component.html',
  styleUrls: ['./search-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCellComponent implements OnInit {


  @Input() column;

  constructor() { }

  ngOnInit() {
    
  }

}
