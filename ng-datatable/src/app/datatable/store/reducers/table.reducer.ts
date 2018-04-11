import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';
import { rowsReducer } from './rows/rows.reducer';
import { reorderArray } from '../analyzers/reorder';
import * as ScrollActions from '../actions/body/scroll.action';

export function tableReducer(
    state = initializeTableState(),
    action: Action
): TableState {
    const newState = state;

    switch (action.type) {
        case ColumnActions.MOVE_COLUMN: {
            const payload = action.payload;

            const target = state.visibleColumns.findIndex(c => c === payload.target.name);
            const source = state.visibleColumns.findIndex(c => c === payload.source.name);

            const visibleColumns = reorderArray(state.visibleColumns, source, target);

            return {
                ...state,
                visibleColumns: visibleColumns,
                viewportColumns: visibleColumns,
            };
        }

        case ScrollActions.VERTICAL_SCROLL: {
            const payload = (action as ScrollActions.VerticalScroll).payload;
            // console.log('VER SCR');
            // console.log(payload);
            const top = payload.scrollTop;
            const bottom = payload.scrollTop + payload.height;

            const viewportRows = [];
            Object.keys(state.rows).forEach(key => {
                if (state.rows[key].positionY > top - 500 && state.rows[key].positionY + 40 < bottom + 500) {
                    viewportRows.push(key);
                }
            });

            return {
                ...state,
                viewportRows
            };
        }
    }


    return {
        ...state,
        columns: columnsReducer(state.columns, action),
        rows: rowsReducer(state.rows, action),
    };
}

