export enum SortDomains {
    LOCAL = 'LOCAL',
    GLOBAL = 'GLOBAL'
}

export interface ISortConfig {
    domain: SortDomains;
}

export const getDefaultSortConfig = (): ISortConfig => {
    return {
        domain: SortDomains.LOCAL
    };
};


