export function reorderArray(array, source, target) {

    const sourceElement = array[source];

    array = array.filter((e, i) => i !== source);

    return [
        ...array.slice(0, target),
        sourceElement,
        ...array.slice(target)
    ];
}
