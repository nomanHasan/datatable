import { Column } from '../../../models/columns/column.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';

export const columnReducer = (state: Column, action: Action): Column => {
    const payload = action.payload;
    if (state.name !== action.payload.column.name) {
        return state;
    }
    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            return {
                ...state,
                width: payload.dividerState.left + payload.dividerState.leftOffset
            };
        }
    }
};
