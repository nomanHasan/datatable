import { DividerState } from './divider-state.model';

export interface Column {
    name: string;
    type: string;
    width: number;
    displayValue?: string;
    editable?: boolean;
    alignment?: string;
    sorter?: any;
    searcher?: any;
    format?: any;
    dynamic?: any;
    dividerState?: DividerState;
}