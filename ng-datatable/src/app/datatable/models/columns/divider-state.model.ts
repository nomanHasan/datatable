export interface DividerState {
    left?: number;
    leftOffset?: number;
}

export const defaultDividerState = (): DividerState => {
    return {
        ... {
            left : 0,
            leftOffset : 3.5
        }
    };
};
