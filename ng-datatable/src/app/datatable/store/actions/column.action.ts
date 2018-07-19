import { Column } from '../../models/columns/column.model';
import { SortDirections } from '../../models/sort/sort-direction.model';
import { DividerState } from '../../models/columns/divider-state.model';
import { Action } from './action.model';
import { Sides } from '../../models/columns/sides.model';

export const COLUMN_RESIZE = 'COLUMN_RESIZE';
export const COLUMN_SORT = 'COLUMN_SORT';
export const MOVE_COLUMN = 'MOVE_COLUMN';



export class SortColumn implements Action {
    readonly type = COLUMN_SORT;

    constructor(public payload: {
        column: Column,
        direction: SortDirections
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

export class MoveColumn implements Action {
    readonly type = MOVE_COLUMN;

    constructor(public payload: {
        target?: Column,
        source: Column,
        side: Sides
    }) {
        
    }
}

export type All = SortColumn | ResizeColumn | MoveColumn;
