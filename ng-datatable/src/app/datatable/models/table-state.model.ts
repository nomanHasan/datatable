import { RowState } from './row/row-state.model';
import { Column, ColumnCollectionMap } from './columns/column.model';
import { DividerConfig, defaultDividerConfig } from './columns/divider-config.model';

export class TableState {
    tableName?: string;
    keyProperty?: string;


    rows?: RowState[];
    columns?: ColumnCollectionMap;

    visibleRows?: string[];
    visibleColumns?: string[];

    viewportRows?: string[];
    viewportColumns?: string[];

    scroll?: any;

    loaded: boolean;
    error: boolean;
    loading: boolean;

    dividerConfig?: DividerConfig;
}


export const initializeTableState = (): TableState => {
    return {
        loaded: false,
        loading: true,
        error: false,

        dividerConfig: defaultDividerConfig()
    };
};
