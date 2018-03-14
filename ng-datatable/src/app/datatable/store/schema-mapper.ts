import { RowState, CellCollectionMap } from '../models/row/row-state.model';
import { CellState } from '../models/cell/cell-state.model';
import { Cell } from '../models/cell/cell.model';
import { Column, ColumnCollectionMap } from '../models/columns/column.model';

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

    flattenColumns(cols: Column[]): {
        columns: ColumnCollectionMap,
        viewportColumns: string[],
        visibleColumns: string[]
    } {

        const columns: any = cols.reduce((accm, obj) => {
            accm[obj.name] = obj;
            return accm;
        }, {});

        const viewportColumns = cols.map(c => c.name);
        const visibleColumns = cols.map(c => c.name);



        return {
            columns,
            viewportColumns,
            visibleColumns
        };

    }

}
