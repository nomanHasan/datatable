import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'no-footer-cell',
  templateUrl: './footer-cell.component.html',
  styleUrls: ['./footer-cell.component.scss']
})
export class FooterCellComponent implements OnInit {


  @Input() column;

  constructor() { }

  ngOnInit() {
  }

}
