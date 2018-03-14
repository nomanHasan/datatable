import { Column } from '../../../models/columns/column.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';
import { columnReducer } from './column.reducer';
import { SortDirections } from '../../../models/sort/sort-direction.model';

export const columnsReducer = (
    state: Column[],
    action: Action
): Column[] => {
    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            return state.map(column => columnReducer(column, action));
        }
        case ColumnActions.COLUMN_SORT: {
            const payload = action.payload;
            return state.map(c => {
                c.sort = SortDirections.NONE;
                if (c.name === payload.column.name) {
                    c.sort = payload.direction;
                }
                return c;
            });
        }
    }
    return state;
};
