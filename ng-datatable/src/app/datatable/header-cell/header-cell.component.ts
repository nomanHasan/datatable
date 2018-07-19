import {
  Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy,
  ElementRef, ViewChild, ChangeDetectorRef, EventEmitter, Output, HostListener
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Column } from '../models/columns/column.model';
import { SortDirections, toggleSortDirection } from '../models/sort/sort-direction.model';
import { TableStore } from '../store/table.store';
import { SortColumn, ResizeColumn, MoveColumn } from '../store/actions/column.action';
import { DividerConfig } from '../models/columns/divider-config.model';
import { Sides } from '../models/columns/sides.model';

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
  @Input() dividerConfig: DividerConfig;

  @Output() action = new EventEmitter<any>();


  dividerState = {
    left: 0,
    leftOffset: 3.5
  };

  mouseState = {
    down: false,
    over: false
  };


  @ViewChild('vDivider') vDivider;


  constructor(
    private el: ElementRef,
    private store: TableStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.mouseEvent.subscribe(res => {

      if (this.mouseState.down) {

        this.mouseeventHander(res);

      }

    });

    this.dividerState.leftOffset = (this.dividerConfig.width / 2) + 1;
    this.dividerState.left = this.column.width - this.dividerState.leftOffset;

  }

  mousedownDivider(event) {
    this.mouseState.down = true;
  }

  mouseMove(event) {
    const parentRect = this.vDivider.nativeElement.parentElement.getBoundingClientRect();

    const x = event.clientX - parentRect.left - this.dividerState.leftOffset;

    if (this.mouseState.down) {

      this.dividerState.left = x;

      this.cd.detectChanges();

    }

    event.preventDefault();

  }

  mouseUp(event) {
    this.mouseState.down = false;
    this.action.emit(new ResizeColumn({
      column: this.column,
      dividerState: this.dividerState
    }));
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

  cellClicked(event) {
    const direction = toggleSortDirection(this.column.sort);
    console.log(direction);
    this.action.emit(new SortColumn({ column: this.column, direction: direction }));
  }



  @HostListener('dragstart', ['$event']) ondragstart(event) {
    console.log(event);
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('column', JSON.stringify(this.column));
  }


  @HostListener('dragenter', ['$event']) dragenter(event) {
    event.preventDefault();
  }


  @HostListener('dragover', ['$event']) dragover(event) {
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event']) dragleave(event) {
    console.log(event);
  }

  @HostListener('drop', ['$event']) ondrop(event) {
    console.log(event);
    console.log(event.dataTransfer.getData('column'));
    let source: Column;

    try {

      source = JSON.parse(event.dataTransfer.getData('column'));

    } catch (e) {

      return;

    }

    this.action.emit(new MoveColumn({
      target: this.column,
      source: source,
      side: Sides.Left
    }));
  }

}
