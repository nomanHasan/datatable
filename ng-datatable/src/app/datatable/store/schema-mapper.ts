import { RowState, RowCollectionMap } from '../models/row/row-state.model';
import { CellState } from '../models/cell/cell-state.model';
import { Cell } from '../models/cell/cell.model';
import { Column, ColumnCollectionMap } from '../models/columns/column.model';

export class SchemaMapper {
    fromTabledata(data): RowState[] {
        return data.map((d, i) => {

            const map: any = {};
            Object.keys(d).map(k => {
                map[k] = new CellState(k, d[k]);
            });

            return { ...new RowState(map), positionY: i * 40 };
        });
    }

    flattenColumns(cols: Column[]): {
        columns: ColumnCollectionMap,
        viewportColumns: string[],
        visibleColumns: string[]
    } {
        return {
            columns: cols.reduce((accm, obj) => {
                accm[obj.name] = obj;
                return accm;
            }, {}) as ColumnCollectionMap,
            viewportColumns: cols.map(c => c.name),
            visibleColumns: cols.map(c => c.name)
        };
    }

    flatMapRows(ros: RowState[], rowKey: string): {
        rowCollectionMap: RowCollectionMap,
        visibleRows: string[],
        viewportRows: string[],
    } {
        return {
            rowCollectionMap: ros.reduce((accm, obj) => {
                accm[obj['cells'][rowKey]['data']] = obj;
                return accm;
            }, {}) as RowCollectionMap,
            visibleRows: ros.map(r => r['cells'][rowKey]['data']),
            viewportRows: ros.slice(0, 20).map(r => r['cells'][rowKey]['data']),
        };
    }


    assignPositionX(visibleColumns: string[], columns: ColumnCollectionMap) {
        let posX = 0;

        visibleColumns.forEach(key => {
            columns[key] = {
                ...columns[key],
                positionX: posX
            };
            posX += columns[key].width;
        });

        return {...columns};
    }

}
