import { IRow } from './row.model';
import { CellState } from '../cell/cell-state.model';

export class RowState {

    selected?: boolean;

    constructor(
        public cells?: Map<string, CellState>
    ) {

    }

    getRow(): IRow {
        return {
            cells: Array.from(this.cells).reduce((obj, [key, value]) => (
                Object.assign(obj, { [key]: value.getCell() })
              ), { })
        };
    }

}

