import { RowState } from './row/row-state.model';
import { Column } from './columns/column.model';
import { DividerConfig, defaultDividerConfig } from './columns/divider-config.model';

export interface TableState {
    tableName?: string;
    keyProperty?: string;
    rows?: RowState[];
    columns?: Column[];
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
