const randomWords = require('random-words');
const R = require('ramda');

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

const generateTableData = async(row, col) => {
    const tableData = [];

    const cols = ['index'];

    range(col).forEach(c => {
        cols.push(randomWords());
    });

    range(row).forEach(async(r, i) => {
        let rowData = {};
        rowData = {
            'index': i
        };

        cols.forEach(async(c, index) => {
            if (c === 'index') {
                return;
            }
            rowData = {
                ...rowData,
                [c]: randomWords()
            };
        });

        tableData.push(rowData);
    });
    return {tableData, columns: cols};
};

const word = length => {

    if (!length) {
        length = num(10);
    }

    const vowels = 'aeiou';
    const constants = 'qwrtpsdfghjklzxcvbnm';

    let text = '';

    Array(length)
        .fill(0)
        .forEach(element => {
            text += constants.includes(R.last(text))
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

const DataGenerator = {
    getPlainArray,
    generateTableData,
    word
};

module.exports = DataGenerator;