import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'no-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input() columns;

  @Input() visibleColumns;
  @Input() viewportColumns;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

}
