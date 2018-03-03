import randomWords from 'random-words';
import {timer} from './benchamrk.js';


const range = (length) => {
    return Array.from(Array(length).fill(0));
}

const randTd = (colNumber, tdh = 'td') => {
    let tds = '';
    range(columnNumber).forEach(e => {
        tds += `<${tdh}>${randomWords()}</${tdh}>`
    });
    return tds;
}

const getTableData = (row, col) => {
    let tableData = [];
    range(row).forEach((r, i) => {
        let rowData = [];
        rowData.push(i);
        range(col).forEach(c => {
            rowData.push(randomWords())
        })
        tableData.push(rowData);
    })
    return tableData;
}


const getTableHtml = (td) => {;
    return td.map((r, i) => {
        if(i === 0 ) {
            return tableRow(r, 'th')
        } else {
            return tableRow(r, 'td')
        }
    }).join('');
}

const tableRow = (tr, tdh = 'td') => {
    return `<tr>${
        tr.map((d) => {
            return tableColumn(d, tdh)
        }).join('')
    }</tr>`
}

const tableColumn = (td, tdh = 'td') => {
    return `<${tdh}>${td}</${tdh}>`;
}

let rowNumber = 10;
let columnNumber = 10;

let tableData = getTableData(rowNumber, columnNumber);
console.log(tableData);

const render = (element, innerHTML) => {
    if (element) {
        const t = timer(`Element Paint Time`);
        element.innerHTML = innerHTML;
        console.log(t.stop());
    }
}


window.onload = e => {

    const tableElement = document.querySelector('#table');
    const rows = document.querySelector('#rows');
    const columns = document.querySelector('#columns');
    const renderButton = document.querySelector('#render');

    renderButton.onclick = e => {

        e.preventDefault();
        e.stopPropagation();

        rowNumber = parseInt(rows.value) ? parseInt(rows.value)  : 10 ;
        columnNumber = parseInt(columns.value) ? parseInt(columns.value) : 10;

        let tableHTML = getTableHtml(getTableData(rowNumber, columnNumber));

        render(tableElement, tableHTML);
    }


    let tableHTML = getTableHtml(tableData);

    render(tableElement, tableHTML);
}