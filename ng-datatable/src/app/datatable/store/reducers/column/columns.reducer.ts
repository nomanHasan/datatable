import { Column, ColumnCollectionMap } from '../../../models/columns/column.model';
import { Action } from '../../actions/action.model';
import * as ColumnActions from '../../actions/column.action';
import { columnReducer } from './column.reducer';
import { SortDirections } from '../../../models/sort/sort-direction.model';

export const columnsReducer = (
    state: ColumnCollectionMap,
    action: Action
): ColumnCollectionMap => {
    const payload = action.payload;

    switch (action.type) {
        case ColumnActions.COLUMN_RESIZE: {
            const newState = state;
            newState[payload.column.name].width = payload.dividerState.left + payload.dividerState.leftOffset;
            return {...newState};
        }
        case ColumnActions.COLUMN_SORT: {
            Object.keys(state).forEach(key => {
                state[key].sort = SortDirections.NONE;
                if (state[key].name === payload.column.name) {
                    state[key].sort = payload.direction;
                }
            });
            return { ...state };
        }
    }
    return state;
};
