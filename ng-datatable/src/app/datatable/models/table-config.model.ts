import { ISortConfig, getDefaultSortConfig } from './sort/sort-config.model';
import { ISearchConfig, getDefaultSearchConfig } from './search/search-config.model';
import { IScrollConfig, getDefaultScrollConfig } from './scroll/scroll-config.model';

export interface ITableConfig {
    keyProperty?: string;
    ngScrollActivated?: boolean;
    sortConfig?: ISortConfig;
    searchConfig?: ISearchConfig;
    scrollConfig?: IScrollConfig;
}



export const getDefaultTableConfig = (): ITableConfig => {
    return {
        keyProperty: 'id',
        sortConfig: getDefaultSortConfig(),
        searchConfig: getDefaultSearchConfig(),
        scrollConfig: getDefaultScrollConfig(),
        ngScrollActivated: true
    };
};
