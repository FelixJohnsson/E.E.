const characters = require('./characterFunctions');
const towns = require('./towns');
const jobs = require('./jobs');
const stores = require('./stores');
const duchysAndCounties = require('./duchysAndCounties');
const backup = require('./backupFunctions');

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NTg1MjY1MDQxNzYzNDY3Mjg1.XPfQQw.lZWgGswKCamz8fbURdEJ00bsWAs';

bot.on('ready', () => {
    console.log(`
.:.               
.::::.             
..         ..::::::''::         
::::..  .::''''':::    ''.      
':::::::'         '.  ..  '.    
::::::'            : '::   :   
:::::     .        : ':'   :  
:::::    :::       :.     .'. 
.::::::    ':'     .' '.:::: : 
::::::::.         .    ::::: : 
:::::    '':.... ''      '''' : 
':::: .:'              ...'' :  
..::.   '.........:::::'   :   
'':::.   '::'':'':::'   .'    
'..  ''.....'  ..'      
''........''
        E.E. is online`)
});

bot.on('message', msg => {
    let request = msg.content.split(' ');
    let userID = msg.author.username + '#' + msg.author.discriminator;

    if(request[0] === 'c'){
        msg.reply(characters.createCharacter('Ross', 24, 'Caen', userID));
    }
//CHARACTER - DONE
    switch (request[0]) {
        case 'createCharacter': //DONE
            msg.reply(characters.createCharacter(request[1], request[2], request[3], userID));
        break;    
        case 'checkMyCharacter': //DONE
            msg.reply(characters.checkMyCharacter(userID));
        break;  
        case 'characterTransfer'://DONE
            msg.reply(characters.characterTransfer(userID, request[1]));
        break;
    }
//MONEY - DONE
    switch (request[0]){
        case 'checkPurse':      //DONE
        case 'p':  
            msg.reply(characters.checkPurse(userID));
        break;
        case 'sendMoney':       //NEEDS TESTING
            msg.reply(characters.sendMoney(userID, request[1], request[2]));
        break;
        case 'checkInventory':  //DONE
        case 'q':  
            msg.reply(characters.checkInventory(userID));
        break;
        case 'dailyCosts':      //DONE
            msg.reply(characters.dailyCosts(userID));
        break;
        case 'changeDailyCosts': //DONE
            msg.reply(characters.changeDailyCosts(request[1]));
        break;
        case 'sendMoney':        //DONE
            msg.reply(characters.sendMoney(userID, request[1], request[2]));
        break;
}
// JOBS - DONE
    switch (request[0]) {
        case 'workMiner':         //DONE
            msg.reply(jobs.miner(userID));
        break;
        case 'workFarmer':        //DONE
            msg.reply(jobs.farmer(userID));
        break;        
        case 'workBlacksmith':   //DONE
            msg.reply(jobs.blacksmith(userID));
        break;     
        case 'workBaker':        //DONE
            msg.reply(jobs.baker(userID));
        break;
//WORKING
        case 'workingMiner':     //DONE
            msg.reply(jobs.workingMiner(userID, msg));
        break;
        case 'workingFarmer':   //DONE
            msg.reply(jobs.workingFarmer(userID, msg));
        break;
        case 'workingBlacksmith'://DONE
            msg.reply(jobs.workingBlacksmith(userID, msg));
        break;
        case 'workingBaker':    //DONE
            msg.reply(jobs.workingBaker(userID, msg));
        break;
    }
//ORE & GRAIN - DONE
    switch (request[0]){
        /*case 'sellOre': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(towns.sellOre(userID, request[1]))};
        break;
        case 'askGrain': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(towns.askGrain(userID, request[1]))};
        break;
        case 'sellGrain': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(towns.sellGrain(userID, request[1]))};
        break;*/
        case 'buyOre': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.buyOre(userID, request[1]))};
        break;
        case 'buyGrain': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.buyGrain(userID, request[1]))};
        break;
        case 'sellArmor': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.sellArmor(userID, request[1]))};
        break;
        case 'buyArmor': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.buyArmor(userID, request[1]))};
        break;
        case 'sellBread': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.sellBread(userID, request[1]))};
        break;
        case 'buyBread': //DONE
        if(request[1] === undefined){ msg.reply('Need an amount.')} else {
            msg.reply(stores.buyBread(userID, request[1]))};
        break;
        case 'checkBlacksmithStore': //DONE
            msg.reply(stores.checkBlacksmithStore(userID));
        break;
        case 'checkBakerStore': //DONE
            msg.reply(stores.checkBakerStore(userID));
        break;
    }
//LOCATION - DONE
    switch (request[0]) {
        case 'checkMyLocation': //DONE
            msg.reply(characters.checkMyLocation(userID, request[1]));
        break;
        case 'moveTo':          //DONE
            msg.reply(characters.moveLocation(userID, request[1]));
        break;
        case 'townInventory':          //DONE
        msg.reply(towns.checkTownInventory(userID));
        break;
    }
// CHECK LAND OWNER - DONE
    switch (request[0]){
        case 'checkDuchyOwner': //DONE
            msg.reply(duchysAndCounties.duchyOwner(request[1]));
        break;
        case 'checkCountyOwner'://DONE
            msg.reply(duchysAndCounties.countyOwner(request[1]));
        break;
        case 'checkTownOwner':  //DONE
            msg.reply(towns.townOwner(request[1]));
        break;
    }
// GIVE/REMOVE LAND & TITLES - DONE
    switch (request[0]){
        case 'giveDuchy': //DONE
            msg.reply(duchysAndCounties.giveDuchy(userID, request[1], request[2]));
        break;
        case 'takeDuchy'://CHECK
            msg.reply(duchysAndCounties.takeDuchy(userID, request[1]));
        break;
        case 'giveCounty': //DONE
            msg.reply(duchysAndCounties.giveCounty(userID, request[1], request[2]));
        break;
        case 'takeCounty'://CHECK
        msg.reply(duchysAndCounties.takeCounty(userID, request[1]));
        break;
        case 'giveTown':   //DONE
            msg.reply(towns.giveTown(userID, request[1], request[2]));
        break;
        case 'takeTown': //CHECK
            msg.reply(towns.takeTown(userID, request[1]));
        break;
    }
// TOWN CITIZENS - DONE
    switch (request[0]){
    case 'increaseTownCitizens': //CHECK
        msg.reply(towns.increaseTownCitizens(userID, request[1], request[2]));
    break;
    case 'decreaseTownCitizens': //CHECK
    msg.reply(towns.decreaseTownCitizens(userID, request[1], request[2]));
    break;
    case 'checkTownCitizens': //CHECK
    msg.reply(towns.townCitizens(request[1]));
    break;
    }
//COLLECT TAX - DONE
    switch (request[0]){
    case 'collectDuchyTax': //DONE
        msg.reply(duchysAndCounties.duchyTax(userID, request[1], msg));
    break;
    case 'collectCountyTax': //DONE
        msg.reply(duchysAndCounties.countyTax(userID, request[1], msg));
    break;
    case 'collectTownTax': //DONE
        msg.reply(towns.townTax(userID, request[1], msg));
    break;
    }
//WAR - DONE
    switch (request[0]){
    case 'declareDuchyWar': //DONE
        msg.reply(duchysAndCounties.duchyWar(userID, request[1], request[2]));
    break;
    case 'declareCountyWar': //DONE
    msg.reply(duchysAndCounties.countyWar(userID, request[1], request[2]));
    break;
    }
//ADMIN COMMANDS - DONE
    switch (request[0]) {
        case 'giveMoney':       //DONE
            msg.reply(characters.giveMoney(userID, request[1], request[2]));
        break;
        case 'rti':       //DONE
            msg.reply(towns.randomizeTownInventory(userID));
        break;
    }
//NPCS
    switch (request[0]) {
        case 'wakeNPCs':       //
            msg.reply(towns.initiateNPCs(userID));
        break;
    }
//USER STORE
    switch (request[0]) {
        case 'openStore':       //
            msg.reply(towns.openBusiness(userID, request[1], request[2]));
        break;
        case 'checkMyStore':       //
            msg.reply(towns.checkMyBusiness(userID));
        break;
        case 'checkWorkers':       //
            msg.reply(towns.checkWorkers(userID));
        break;
        case 'checkWorker':       //
            msg.reply(towns.checkWorker(userID, request[1]));
        break;
        case 'checkWorker':       //
            msg.reply(towns.hireWorker(userID, request[1]));
        break;
        case 'work':       //
            msg.reply(towns.work(userID, msg));
        break;
}
//BACKUP - SOLVE
    switch (request[0]) {
        case 'saveCharacters':       //DONE
            msg.reply(backup.charactersBackup(userID));
        break;
        case 'saveTowns':       //DONE
            msg.reply(backup.townsBackup(userID));
        break;
        case 'backup':       //DONE
            msg.reply(backup.backup(userID));
        break;
}
});

bot.login(token);


