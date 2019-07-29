const towns = require('./towns');
const duchysAndCounties = require('./duchysAndCounties');
const backup = require('./backupFunctions');

let dailyCosts = 300;
let characterList = [
    {"char":{"id":"Eternal#3880","admin":false,"pos":0,"bio":{"name":"Ross","age":"24","location":"Caen","landed":false},"inventory":{"ore":39,"armor":2,"grain":27,"bread":2,"purse":15386},"jobs":{"miner":true,"farmer":true,"baker":true,"merchant":false,"blacksmith":true}}},
    {"char":{"id":"xt101#2706","admin":false,"pos":1,"bio":{"name":"Victor","age":"29","location":"Veruille","landed":false},"inventory":{"ore":10,"armor":0,"grain":10,"bread":0,"purse":1000},"jobs":{"miner":false,"farmer":false,"baker":false,"merchant":false,"blacksmith":false}}},
    {"char":{"id":"Xylaphone#6294","admin":false,"pos":2,"bio":{"name":"Xylar","age":"21","location":"Vallery","landed":false},"inventory":{"ore":49,"armor":0,"grain":0,"bread":22,"purse":14017},"jobs":{"miner":false,"farmer":true,"baker":true,"merchant":false,"blacksmith":true}}},
    {"char":{"id":"FatGiwafe#1829","admin":false,"pos":3,"bio":{"name":"Giwafe","age":"22","location":"Falaise","landed":false},"inventory":{"ore":0,"armor":56,"grain":0,"bread":42,"purse":8705},"jobs":{"miner":true,"farmer":true,"baker":true,"merchant":false,"blacksmith":true}}},
    {"char":{"id":"MaarrS#3578","admin":false,"pos":4,"bio":{"name":"Mars","age":"27","location":"SaintPierreEglife","landed":false},"inventory":{"ore":4,"armor":15,"grain":3,"bread":20,"purse":14252},"jobs":{"miner":true,"farmer":true,"baker":true,"merchant":false,"blacksmith":true}}},
    {"char":{"id":"julian#7918","admin":false,"pos":5,"bio":{"name":"Julian","age":"7","location":"Brite","landed":false},"inventory":{"ore":12,"armor":5,"grain":13,"bread":3,"purse":1700},"jobs":{"miner":true,"farmer":true,"baker":true,"merchant":false,"blacksmith":true}}},
];

function getCharacter(ID){
    for (let i = 0; i < characterList.length; i++) {
    if (characterList[i].char.id === ID){ return characterList[i].char }
    }
    return undefined; 
}
exports.exportGetCharacter = function (ID){
    for (let i = 0; i < characterList.length; i++) {
    if (characterList[i].char.id === ID){ return characterList[i].char }
    }
    return undefined; 
}
//CHARACTER
exports.createCharacter = function (name, age, location, userID) {

    let char = getCharacter(userID)

    let townCheck = towns.checkTown(location);
    if (townCheck === false){ 
        console.log(userID + " tried to make a character in an unexisting town.")
        return "That Town doesn't exist. See the #land channel for all existing Towns."
    }

    if(char !== undefined) { return "You already have a character."}
    
        const character = {
            char: {
                id: userID,
                admin: false,
                pos: characterList.length,
                bio: {
                    name: name,
                    age: age,
                    location: location,
                    landed: false,
                },
                inventory: {
                    ore: 0,
                    armor: 0,
                    grain: 0,
                    bread: 0,
                    purse: 1000,
                },
                jobs: {
                    miner: false,
                    farmer: false,
                    baker: false,
                    merchant: false,
                    blacksmith: false,
                }
            }
        }

    characterList.push(character);
    backup.backup();
    console.log(userID + ' made a character. ' + character.char.bio.name + ' in ' + character.char.bio.location + '.')
    return 'Added your character, ' + character.char.bio.name + ' in ' + character.char.bio.location + '.';
}
exports.checkMyCharacter = function (userID) {
    const character = getCharacter(userID);
    if (character === null){ return "Can't find your character." }

    console.log(userID + ' is checking his character.')
    return "Your character's name is " + character.bio.name + ', he/she is in ' + character.bio.location + '.';
}
exports.checkMyLocation = function (userID) {
    let character = getCharacter(userID);
    if (character === null){ return "Can't find your character." }
    return "You're in the town " + character.bio.location;
}
exports.moveLocation = function (userID, town){
    let character = getCharacter(userID);
    let checkTown = towns.checkTown(town);
    if (checkTown === false){ return "Can't find " + town};
    if (character === null){ return "Can't find your character." }

    characterList[character.pos].char.bio.location = town; 
    return "Your character has moved to " + town + '.';
}
exports.characterTransfer = function (userID, newUserID) {
    if (arguments.length < 3){ return "Need more information." }

    const character = getCharacter(userID);
    if (character === null){ return "Can't find your character." }

    characterList[character.pos].char.id = newUserID;

    console.log(userID + ' is transfering his character.')
    return "Your character has been transfered to a new userID: " + newUserID;
}
//MONEY
exports.checkPurse = function (userID){
    console.log(userID)
    const character = getCharacter(userID);
    console.log(character)
    
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to check his purse.')
        return "Can't find your character." 
    }
    else {
        console.log(userID + ' checked his purse.')
        return "You have " + characterList[character.pos].char.inventory.purse + ' deniers.';
    }
}
exports.sendMoney = function (userID, target, amount){
    const character = getCharacter(userID);

    if (character === null){ 
        console.log(userID + ' tried to send money.')
        return "Can't find your character." 
    }
    else {
    const reciever = getCharacter(target);
    if (reciever === null){ 
        return "Can't find the recieving character." 
    }
        characterList[character.pos].char.inventory.purse -= Number(amount);
        characterList[reciever.pos].char.inventory.purse += Number(amount);

        console.log(userID + ' is sending ' + amount + ' deniers to ' + target)
        return 'You sent ' + amount + ' deniers to '   + target;
    }
}
exports.sendOre = function (userID, target, amount){
    const character = getCharacter(userID);

    if (character === null){ 
        console.log(userID + ' tried to send ore.')
        return "Can't find your character." 
    }
    else {
    const reciever = getCharacter(target);
    if (reciever === null){ 
        console.log(userID + ' tried to send ore.')
        return "Can't find the recieving character." 
    }
    if(characterList[character.pos].char.inventory.ore > amount){ return "You don't have enought ore."}
        characterList[character.pos].char.inventory.ore -= amount;
        characterList[reciever.pos].char.inventory.ore += amount;

        console.log(userID + ' is sending' + amount + ' ore to ' + target)
        return 'You sent ' + amount + ' ore to '   + target;
    }
}
exports.sendGrain = function (userID, target, amount){
    const character = getCharacter(userID);

    if (character === null){ 
        console.log(userID + ' tried to send grain.')
        return "Can't find your character." 
    }
    else {
    const reciever = getCharacter(target);
    if (reciever === null){ 
        console.log(userID + ' tried to send grain.')
        return "Can't find the recieving character." 
    }
    if(characterList[character.pos].char.inventory.grain > amount){ return "You don't have enought grain."}
        characterList[character.pos].char.inventory.grain -= amount;
        characterList[reciever.pos].char.inventory.grain += amount;

        console.log(userID + ' is sending' + amount + ' grain to ' + target)
        return 'You sent ' + amount + ' grain to '   + target;
    }
}
exports.checkInventory = function (userID){
    const character = getCharacter(userID);

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to check his inventory.')
        return "Can't find your character." 
    } else {
        console.log(userID + ' is checking his inventory.')
        return "You have: " + character.inventory.ore + ' ore, ' + character.inventory.grain + ' grain, ' + character.inventory.armor + ' armor, ' + character.inventory.bread + ' bread and ' + character.inventory.purse + ' deniers in your purse.'
    }
}
exports.dailyCosts = function () {
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    for (let i = 0; i < characterList.length; i++){
        characterList[i].char.inventory.purse -= dailyCosts;
    }
    console.log("A daily cost of " + dailyCosts + " has been collected from all characters.")
    return "A daily cost of " + dailyCosts + " has been collected from all characters."
}
exports.changeDailyCosts = function (amount) {
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    dailyCosts = amount;
    console.log("The daily costs has changed to: " + dailyCosts + ' deniers.')
    return "The daily costs has changed to: " + dailyCosts + ' deniers.';
}
//GIVE LAND
exports.giveDuchy = function (duchy, target) {
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    duchysAndCounties.giveDuchy(duchy, target);

    console.log(target + ' is giving a Duchy.')
    return target + ' has been given ' + duchy;
}
//JOB SUPPORT FUNCTIONS
exports.changeJobs = function(userPos, job) {
    if (job === 'miner'){
        characterList[userPos].char.jobs.miner = true;
    }
    if (job === 'farmer'){
        characterList[userPos].char.jobs.farmer = true;
    }
    if (job === 'blacksmith'){
        characterList[userPos].char.jobs.blacksmith = true;
    }
    if (job === 'baker'){
        characterList[userPos].char.jobs.baker = true;
    }
    if (job === 'merchant'){
        characterList[userPos].char.jobs.merchant = true;
    }
}
exports.salary = function (userPos, pay, itemType, itemAmount){

    characterList[userPos].char.inventory.purse += pay;
    if(itemAmount > 0){
        characterList[userPos].char.inventory[itemType] += itemAmount;
    }
}
exports.moneyPay = function (userPos, amount){
    characterList[userPos].char.inventory.purse -= amount;
}
exports.moneyRecieve = function (userPos, amount){
    characterList[userPos].char.inventory.purse += amount;
}
exports.useItems = function (userPos, itemType, itemAmount){
    characterList[userPos].char.inventory[itemType] -= Number(itemAmount);
}
exports.getItems = function (userPos, itemType, itemAmount){
    characterList[userPos].char.inventory[itemType] += Number(itemAmount);
}
exports.giveMoney = function (userID, amount, target){
    if (userID !== 'Eternal#3880'){ return "You can't do that."}
    let character = getCharacter(target);
    characterList[character.pos].char.inventory.purse += Number(amount);
    return target + ' recieved ' + amount + ' deniers.'
}
exports.exportCharacters = function (){
    return characterList;
}
