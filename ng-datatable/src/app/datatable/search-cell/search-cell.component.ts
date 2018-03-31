import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import { SearchByColumn } from '../store/actions/search.action';

@Component({
  selector: 'no-search-cell',
  templateUrl: './search-cell.component.html',
  styleUrls: ['./search-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCellComponent implements OnInit {


  @Input() column;

  @Output() action = new EventEmitter<any>();

  query;
  querySubject = new Subject<any>();
  queryObservable$ = this.querySubject.asObservable();

  constructor() { }

  ngOnInit() {
    this.queryObservable$.debounceTime(300)
    .distinctUntilChanged().subscribe(value => {
      this.search(value);
    });
  }

  onKeyup(event) {
    // console.log(this.query);
    this.querySubject.next(this.query);
  }

  search(query) {
    this.action.emit(new SearchByColumn({
      column: this.column,
      query: query
    }));
  }

}
