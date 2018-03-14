import {Row} from './row.model';
import {CellState} from '../cell/cell-state.model';

export class RowState {

    selected?: boolean;
    key?: string;
    constructor(public cells?: CellCollectionMap
    ) {}

    getRow(): Row {
        return {
            cells: Object.keys(this.cells).map(k => ({
                ...this.cells[k].getCell()
            }))
        };
    }

}

export type CellCollectionMap = {
    [key: string]: CellState
}[];
