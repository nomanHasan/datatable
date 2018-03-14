import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';
import { rowsReducer } from './rows/rows.reducer';

export function tableReducer(
    state = initializeTableState(),
    action: Action
): TableState {
    const payload = action.payload;
    const newState = state;

    switch (action.type) {
        case ColumnActions.MOVE_COLUMN: {

            console.log(action.payload);

            const visibleColumns = state.visibleColumns.slice();

            const target = visibleColumns.findIndex(c => c === payload.target.name);
            const source = visibleColumns.findIndex(c => c === payload.source.name);

            const temp = visibleColumns[target];
            visibleColumns[target] = visibleColumns[source];
            visibleColumns[source] = temp;

            console.log(target, source, visibleColumns);

            return {
                ...state,
                visibleColumns: visibleColumns,
                viewportColumns: visibleColumns,
            };
        }
    }


    return {
        ...state,
        columns: columnsReducer(state.columns, action),
        rows: rowsReducer(state.rows, action),
    };
}

