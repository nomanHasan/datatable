
import { Column } from './column.model';

export const LEFT = 'left';

export const RIGHT = 'right';

export const CENTER = 'center';

export const EMPTY = '';


export function initializeColumn(
    name: string,
    type: string,
    width: number = 200,
    displayValue: string = EMPTY,
    editable: boolean = true,
    alignment: string = LEFT,
    format = {
        value: 'plain'
    }
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
        alignment
    };
}

export function initColumnWithConfig({
    name = '',
    type = '',
    width = 0,
    displayValue = EMPTY,
    editable = true,
    alignment = LEFT,
    format = {
        value: 'plain'
    }
}): Column {
    return {
        name,
        type,
        width,
        displayValue,
        editable,
        alignment,
        format
    };
}

function getDisplayValue(value: string) {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, l => l.toUpperCase());
}
