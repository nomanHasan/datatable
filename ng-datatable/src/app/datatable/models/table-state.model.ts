import { ITableConfig } from './table-config.model';
import { IColumn } from './columns/column.model';
import { RowState } from './row/row-state.model';

export interface ITableState {
    name: string;
    config: ITableConfig;
    tableData: Array<RowState>;
    columns: Array<IColumn>;
    footerData: Array<any>;
}
