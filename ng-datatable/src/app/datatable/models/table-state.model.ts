import { ITableConfig } from './table-config.model';
import { IColumn } from './columns/column.model';


export interface ITableState {
    name: string;
    config: ITableConfig;
    tableData: Array<any>;
    columns: Array<IColumn>;
    footerData: Array<any>;
}
