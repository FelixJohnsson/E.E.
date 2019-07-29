const characters = require('./characterFunctions');
const towns = require('./towns');
const fs = require('fs');


let counter = 0;

exports.charactersBackup = function () {
let charList = characters.exportCharacters();
let jsonData = '';
let fileName = '';

for (let i = 0; i < charList.length; i++){ 
    jsonData += JSON.stringify(charList[i]);
    jsonData += '/n';
};

fileName = './backups/characters' + counter + '.json';

fs.writeFile(fileName, jsonData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved. File: " + fileName);
    return "JSON file has been saved. File: " + fileName;
});
}

exports.townsBackup = function (){
    let townList = towns.exportTowns();
    let jsonData = '';
    let fileName = '';
    jsonData += JSON.stringify(townList);


fileName = './backups/towns' + counter + '.json';

fs.writeFile(fileName, jsonData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved. File: " + fileName);
    return "JSON file has been saved. File: " + fileName;
});
}


exports.backup = function (){
    counter++
    exports.townsBackup();
    exports.charactersBackup();
    return 'Saved...'
}