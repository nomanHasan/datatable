import { Action} from './action.model';
import { Column } from '../../models/columns/column.model';

export const SEARCH_BY_COLUMN = 'SEARCH_BY_COLUMN';

export class SearchByColumn implements Action {
    readonly type = SEARCH_BY_COLUMN;

    constructor(public payload: {
        column: Column,
        query: string
    }) {

    }
}
