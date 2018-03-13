import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';
import { rowsReducer } from './rows/rows.reducer';

export function tableReducer(
    state = initializeTableState(),
    action: Action
): TableState {
    return {
        ...state,
        columns: columnsReducer(state.columns, action),
        rows: rowsReducer(state.rows, action),
    };
}

