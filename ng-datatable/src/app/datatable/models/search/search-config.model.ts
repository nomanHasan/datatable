export enum SearchDomains {
    LOCAL = 'LOCAL',
    GLOBAL = 'GLOBAL'
}

export interface ISearchConfig {
    domain: SearchDomains;
}


export const getDefaultSearchConfig = (): ISearchConfig => {
    return {
        domain: SearchDomains.LOCAL
    };
};
