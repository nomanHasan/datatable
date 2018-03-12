import { RowState } from '../../../models/row/row-state.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';

export function rowsReducer(
    state: RowState[],
    action: Action
): RowState[] {
    switch (action.type) {
        case ColumnActions.COLUMN_SORT: {
            console.log(action);
            return state.slice(0, 10);
        }
    }
    return state;
}
