import * as randomWords from 'random-words';

const range = (length) => {
    return Array.from(Array(length).fill(0));
};

const getPlainArray = (row, col) => {
    const tableData = [];

    range(row).forEach((r, i) => {
        const rowData = [];
        rowData.push(i);
        range(col).forEach(c => {
            rowData.push(randomWords());
        });
        tableData.push(rowData);
    });
    return tableData;
};

const getTableData = (row, col) => {
    const tableData = [];

    const cols = [];
    range(col).forEach(c => {
        cols.push(randomWords());
    });

    range(row).forEach((r, i) => {
        let rowData = {};
        rowData = { };
        cols.forEach(c => {
            rowData = {
                ...rowData,
                [c]: randomWords()
            };
        });
        tableData.push(rowData);
    });
    return {tableData, columns: cols};
};


export const TableData = {
    getPlainArray,
    getTableData
};
