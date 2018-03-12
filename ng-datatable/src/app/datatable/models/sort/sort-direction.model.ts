export enum SortDirections {
    ASCENDING = 'ASCENDING',
    DESCENDING = 'DESCENDING',
    NONE = 'NONE'
}

export const toggleSortDirection = (direction: SortDirections) => {
    switch (direction) {
        case SortDirections.NONE: {
            return SortDirections.ASCENDING;
        }
        case SortDirections.ASCENDING: {
            return SortDirections.DESCENDING;
        }
        case SortDirections.DESCENDING: {
            return SortDirections.ASCENDING;
        }
    }
};
