export interface DividerState {
    left?: number;
    width?: number;
    leftOffset?: number;
}

export const defaultDividerState = (): DividerState => {
    return {
        ... {
            left : 0,
            width : 5,
            leftOffset : 3.5
        }
    };
};
