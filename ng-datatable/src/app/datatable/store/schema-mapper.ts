import { RowState } from '../models/row/row-state.model';
import { CellState } from '../models/cell/cell-state.model';
import { ICell } from '../models/cell/cell.model';

export class SchemaMapper {
    fromTabledata(data): RowState[] {
        return data.map(d => {

            const map: Map<string, CellState> = new Map();
            Object.keys(d).map(k => {
                map.set(k, new CellState(k, d[k]));
            });

            return new RowState(map);
        });
    }
}
