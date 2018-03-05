export interface IColumn {
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
}
