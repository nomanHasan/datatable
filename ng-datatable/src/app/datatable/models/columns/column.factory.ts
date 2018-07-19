
import { Column } from './column.model';
import { defaultDividerState } from './divider-state.model';
import { SortDirections } from '../sort/sort-direction.model';
import { Sides } from './sides.model';

export const EMPTY = '';


export function createColumn(
    name: string,
    type: string,
    width: number = 200,
    displayValue: string = EMPTY,
    editable: boolean = true,
    alignment: string = Sides.Left,
    format = {
        value: 'plain'
    },
    sort: SortDirections = SortDirections.NONE
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
        sort
    };
}

export function createColumnWithConfig({
    name = '',
    type = '',
    width = 0,
    displayValue = EMPTY,
    editable = true,
    alignment = Sides.Left,
    format = {
        value: 'plain'
    },
    sort = SortDirections.NONE
}): Column {
    return {
        name,
        type,
        width,
        displayValue,
        editable,
        alignment,
        format,
        sort
    };
}

function getDisplayValue(value: string) {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, l => l.toUpperCase());
}
