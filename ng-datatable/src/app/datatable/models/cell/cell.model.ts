import { CellState } from './cell-state.model';

export interface Cell {
    key?: string;
    data?: any;
    metadata?: any;
}

export type CellCollectionMap = {
    [key: string]: CellState
}[];
