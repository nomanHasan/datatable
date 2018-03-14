import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'no-footer-row',
  templateUrl: './footer-row.component.html',
  styleUrls: ['./footer-row.component.scss']
})
export class FooterRowComponent implements OnInit {

  @Input() columns;
  @Input() visibleColumns;
  @Input() viewportColumns;

  constructor() { }

  ngOnInit() {
  }

}
