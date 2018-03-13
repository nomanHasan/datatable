import { SortDirections } from '../../models/sort/sort-direction.model';

export const sorterFn = (column, direction) => {
    return (a, b) => {
        a = a.cells[column.name].data;
        b = b.cells[column.name].data;

        const compare = stringComparer(a, b);

        switch (direction) {
            case SortDirections.ASCENDING: {
                return compare;
            }
            case SortDirections.DESCENDING: {
                return -compare;
            }
            default: {
                return 0;
            }
        }

    };
};


const stringComparer = (a, b) => {
    return a.localeCompare(b);
};
