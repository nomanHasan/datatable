import {Row} from './row.model';
import {CellState} from '../cell/cell-state.model';
import { CellCollectionMap } from '../cell/cell.model';

export class RowState {

    selected?: boolean;
    key?: string;
    constructor(public cells?: CellCollectionMap
    ) {}
    positionY?: number;

    getRow(): Row {
        return {
            cells: Object.keys(this.cells).map(k => ({
                ...this.cells[k].getCell()
            }))
        };
    }

}

export type RowCollectionMap = {
    [key: string]: RowState;
}[];
