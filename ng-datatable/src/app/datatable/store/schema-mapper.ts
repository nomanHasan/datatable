import { RowState, CellCollectionMap } from '../models/row/row-state.model';
import { CellState } from '../models/cell/cell-state.model';
import { Cell } from '../models/cell/cell.model';

export class SchemaMapper {
    fromTabledata(data): RowState[] {
        return data.map(d => {

            const map: any = {};
            Object.keys(d).map(k => {
                map[k] = new CellState(k, d[k]);
            });

            return new RowState(map);
        });
    }
}
