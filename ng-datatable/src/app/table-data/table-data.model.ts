// import * as randomWords from 'random-words';
// const randomWords = () => 'CELL';




const word = (length = 7) => {

    if (!length) {
        length = num(10);
    }

    const vowels = 'aeiou';
    const constants = 'qwrtpsdfghjklzxcvbnm';

    let text = '';

    Array(length)
        .fill(0)
        .forEach(element => {
            text += constants.includes(text[text.length - 1])
                ? (Math.random() > 0.8
                    ? letter(constants)
                    : letter(vowels))
                : ((Math.random() > 0.45)
                    ? letter(vowels)
                    : letter(constants));
        });

    text = text
        .slice(0, 1)
        .toUpperCase() + text.slice(1);
    return text;
};

const num = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const letter = string => {
    return string[num(string.length - 1)];
};




const randomWords = word;

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

    const cols = ['index'];
    range(col).forEach(c => {
        cols.push(randomWords());
    });

    range(row).forEach((r, i) => {
        let rowData = {};
        rowData = {
            'index': i
        };
        cols.forEach((c, index) => {
            if (c === 'index') {
                return;
            }
            rowData = {
                ...rowData,
                [c]: randomWords()
            };
        });
        tableData.push(rowData);
        if (i % 10000 === 0) {
            console.log('Row Generated: ', i);
        }
    });
    return {tableData, columns: cols};
};




export const TableData = {
    getPlainArray,
    getTableData
};
