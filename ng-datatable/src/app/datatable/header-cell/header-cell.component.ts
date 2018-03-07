import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'no-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCellComponent implements OnInit {


  @Input() column;
  @Input() mouseEvent: Subject<any>;

  mouseState = {
    down: false
  };

  constructor() { }

  ngOnInit() {

    this.mouseEvent.subscribe(res => {
      console.log(res);
      this.mouseeventHander(res);
    });

  }

  mousedownDivider(event) {
    this.mouseState.down = true;
  }

  mouseeventHander(event) {
    
  }

}
