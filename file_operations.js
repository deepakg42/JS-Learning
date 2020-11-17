const fs = require('fs');
const lineReader = require('line-reader');
const fileName = 'index.js';
// readFile(fileName);
readFileLineByLine(fileName);
function readFile(fileName) {
    fs.readFile(fileName, (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(data.toString());
    })
}

function readFileLineByLine(fileName) {
    var lineNo = 1;
    lineReader.eachLine(fileName, (line, last) => {
        console.log(lineNo++ + '. ' + line);
        // console.log('----------');
        // line++;
    });
}
