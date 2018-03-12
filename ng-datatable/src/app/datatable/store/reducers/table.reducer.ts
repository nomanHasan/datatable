import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';
import { rowsReducer } from './rows/rows.reducer';

export const tableReducer = (
    state = initializeTableState(),
    action: Action
): TableState => {

    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            return {
                ...state,
                columns: columnsReducer(state.columns, action)
            };
        }
        case ColumnActions.COLUMN_SORT: {
            return {
                ...state,
                rows: rowsReducer(state.rows, action)
            };
        }
    }

    return state;
};

