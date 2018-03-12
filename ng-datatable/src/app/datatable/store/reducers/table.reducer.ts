import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';

export const tableReducer = (
    state = initializeTableState(),
    action: Action
) => {

    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            return {
                ...state,
                columns: columnsReducer(state.columns, action)
            };
        }
    }

    return state;
};

