import {Action} from '../action.model';

export const VERTICAL_SCROLL = 'VERTICAL_SCROLL';
export const HORIZONTAL_SCROLL = 'HORIZONTAL_SCROLL';

export class VerticalScroll implements Action {
    readonly type = VERTICAL_SCROLL;

    constructor(public payload: {
        scrollTop: number;
        height: number;
    }) {

    }

}
