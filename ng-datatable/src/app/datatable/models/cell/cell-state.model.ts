import { ICell } from './cell.model';

export class CellState {

    selected?: boolean;

    constructor(
        public key?: string,
        public data?: any,
        public metadata?: any
    ) {

    }


    getCell(): ICell {
        return {
            key: this.key,
            data: this.data,
            metadata: this.metadata
        };
    }
}
