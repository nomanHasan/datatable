export interface DividerConfig {
    width?: number;
}


export const defaultDividerConfig = (): DividerConfig => {
    return {
        ...{
            width: 5
        }
    };
};
