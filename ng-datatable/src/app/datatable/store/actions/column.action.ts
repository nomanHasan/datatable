import { Column } from '../../models/columns/column.model';
import { SortDirections } from '../../models/sort/sort-direction.model';
import { DividerState } from '../../models/columns/divider-state.model';
import { Action } from './action.model';

export const COLUMN_RESIZE = 'COLUMN_RESIZE';
export const COLUMN_SORT = 'COLUMN_SORT';



export class SortColumn implements Action {
    readonly type = COLUMN_SORT;

    constructor(public payload: {
        column: Column,
        sort: SortDirections
    }) {

    }

}


export class ResizeColumn implements Action {
    readonly type = COLUMN_RESIZE;

    constructor(public payload: {
        column: Column,
        dividerState: DividerState
    }) {

    }

}


export type All = SortColumn | ResizeColumn;
