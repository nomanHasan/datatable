import { RowState } from '../../../models/row/row-state.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';
import { sorterFn } from '../../analyzers/sorter'; 

export function rowsReducer(
    state: RowState[],
    action: Action
): RowState[] {
    switch (action.type) {
        case ColumnActions.COLUMN_SORT: {
            return [
                ...state.sort(sorterFn(action.payload.column, action.payload.direction))
            ];
        }
    }
    return state;
}
