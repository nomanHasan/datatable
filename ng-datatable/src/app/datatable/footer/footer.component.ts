import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'no-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input() columns;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }

}
