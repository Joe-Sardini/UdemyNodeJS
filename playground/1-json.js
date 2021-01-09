//const { parsed } = require("yargs");
const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const parsedData = JSON.parse(bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString(); 
const parsedData = JSON.parse(data);
parsedData.name = "Joe";
parsedData.age = 46;
const bookJSON = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json', bookJSON);

//dataBuffer.toString() 