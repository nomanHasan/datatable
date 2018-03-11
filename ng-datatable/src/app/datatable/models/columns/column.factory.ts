
import { Column } from './column.model';
import { defaultDividerState } from './divider-state.model';

export const LEFT = 'left';

export const RIGHT = 'right';

export const CENTER = 'center';

export const EMPTY = '';


export function createColumn(
    name: string,
    type: string,
    width: number = 200,
    displayValue: string = EMPTY,
    editable: boolean = true,
    alignment: string = LEFT,
    format = {
        value: 'plain'
    },
    dividerState = defaultDividerState()
): Column {
    if (displayValue.length === 0) {
        displayValue = getDisplayValue(name);
    }

    return {
        name,
        type,
        width,
        displayValue,
        editable,
        alignment,
        dividerState
    };
}

export function createColumnWithConfig({
    name = '',
    type = '',
    width = 0,
    displayValue = EMPTY,
    editable = true,
    alignment = LEFT,
    format = {
        value: 'plain'
    },
    dividerState = defaultDividerState()
}): Column {
    return {
        name,
        type,
        width,
        displayValue,
        editable,
        alignment,
        format,
        dividerState
    };
}

function getDisplayValue(value: string) {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, l => l.toUpperCase());
}
