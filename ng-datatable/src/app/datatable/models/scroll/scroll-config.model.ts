export interface IScrollConfig {
    scrollBarUp: number;
    scrollPreviousThreshold: number;
    scrollNextThreshold: number;
}

export const getDefaultScrollConfig = (): IScrollConfig => {
    return {
        scrollBarUp: 0,
        scrollPreviousThreshold: 5,
        scrollNextThreshold: 99
    };
};


