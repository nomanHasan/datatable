import { DividerState } from './divider-state.model';
import { SortDirections } from '../sort/sort-direction.model';

export interface Column {
    name: string;
    type: string;
    width: number;
    displayValue?: string;
    editable?: boolean;
    alignment?: string;
    sort?: SortDirections;
    searcher?: any;
    format?: any;
    dynamic?: any;
    dividerState?: DividerState;
}
