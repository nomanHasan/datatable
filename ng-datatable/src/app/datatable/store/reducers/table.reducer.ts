import { initializeTableState, TableState } from '../../models/table-state.model';
import { Action } from '../actions/action.model';
import * as ColumnActions from '../actions/column.action';
import { columnsReducer } from './column/columns.reducer';
import { rowsReducer } from './rows/rows.reducer';
import { reorderArray } from '../analyzers/reorder';
import * as ScrollActions from '../actions/body/scroll.action';
import { Column, ColumnCollectionMap } from '../../models/columns/column.model';
import { summaryFileName } from '@angular/compiler/src/aot/util';

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
        case ScrollActions.HORIZONTAL_SCROLL: {
            const payload = (action as ScrollActions.HorizontalScroll).payload;
            // console.log('VER SCR');
            // console.log(payload);
            const left = payload.scrollLeft;
            const right = payload.scrollLeft + payload.width;

            const viewportColumns = [];
            Object.keys(state.columns).forEach(key => {
                if (state.columns[key].positionX > left - 500 && state.columns[key].positionX < right + 500) {
                    viewportColumns.push(key);
                }
            });

            // console.log(left, right, viewportColumns.map(x => state.columns[x].positionX));

            return {
                ...state,
                viewportColumns
            };
        }

        case ColumnActions.COLUMN_RESIZE: {
            const payload = (action as ColumnActions.ResizeColumn).payload;

            const columnWidth = payload.dividerState.left + payload.dividerState.leftOffset
            
            let accm = 0;

            const columns = state.visibleColumns.map(e => {

                const c: Column = state.columns[e];

                if (e === payload.column.name) {
                    c.width = columnWidth;
                }
                c.positionX = accm;

                accm += c.width;

                return c;
            }).reduce((accum, cur) => {
                accum[cur.name] = cur;
                return accum;
            }, {} as ColumnCollectionMap)

            return {
                ...state,
                columns
            };

        }
    }


    return {
        ...state,
        columns: columnsReducer(state.columns, action),
        rows: rowsReducer(state.rows, action),
    };
}

