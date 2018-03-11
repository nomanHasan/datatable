import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy,
   ElementRef, ViewChild, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Column } from '../models/columns/column.model';

@Component({
  selector: 'no-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCellComponent implements OnInit {


  @Input() column: Column;
  @Input() mouseEvent: Subject<any>;

  // @Input() dividerState = {
  //   columnName: this.column.name,
  //   left: 0,
  //   width: 20,
  //   leftOffset: 11 // = (width / 2) + 1
  // };

  mouseState = {
    down: false,
    over: false
  };


  @ViewChild('vDivider') vDivider;


  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.mouseEvent.subscribe(res => {

      if (this.mouseState.down) {

        this.mouseeventHander(res);

      }

    });

    this.column.dividerState.left = this.column.width - this.column.dividerState.leftOffset;

  }

  mousedownDivider(event) {
    this.mouseState.down = true;
  }

  mouseMove (event) {
    const parentRect = this.vDivider.nativeElement.parentElement.getBoundingClientRect();

    const x = event.clientX - parentRect.left - this.column.dividerState.leftOffset;

    if (this.mouseState.down) {

      this.column.dividerState.left = x;

      this.cd.detectChanges();

    }

    event.preventDefault();

  }

  mouseUp(event) {
    this.mouseState.down = false;
  }

  mouseeventHander(event) {

    switch (event.type) {

      case 'mousemove': {
        this.mouseMove(event);
        break;
      }

      case 'mouseup': {
        this.mouseUp(event);
        break;
      }

      case 'mouseleave': {
        this.mouseState.over = false;
        break;
      }
    }
  }

}
