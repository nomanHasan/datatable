import { Column } from '../../../models/columns/column.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';
import { columnReducer } from './column.reducer';

export const columnsReducer = (
    state: Column[],
    action: Action
): Column[] => {
    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            return state.map(column => columnReducer(column, action));
        }
    }
};
