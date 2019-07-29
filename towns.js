const characters = require('./characterFunctions');
const fs = require('fs');
const faker = require('faker');
faker.locale = "fr";

let townNames = [
"SaintPierreEglife", "Montebourg", "Coutange",
 "Caen", "Bucoy", "Seuer", 
 "Buranton","LaFreteMarce","Ellay",
 "Brite","Falaise","Melleraut",
 "Lisieux","SaintGeorge","Hebert",
 "Amebaut","Eureux","Groffoeuure",
 "Vallery","Veruille","Goderuille",
 "Baily","Tote","Cuilly",
 "Riberpre","Encouy","Hendicourt"]

 let towns =
 {
     "SaintPierreEglife":{"shops":0,"houses":0,"citizens":1101,"owner":"MaarrS#3578",
     "stores":[],
     "NPCs":[]
 },
     "Montebourg":{"shops":0,"houses":0,"citizens":922,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Coutange":{"shops":0,"houses":0,"citizens":719,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Caen":{"shops":0,"houses":0,"citizens":3982,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Bucoy":{"shops":0,"houses":0,"citizens":701,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Seuer":{"shops":0,"houses":0,"citizens":452,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Buranton":{"shops":0,"houses":0,"citizens":1711,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "LaFreteMarce":{"shops":0,"houses":0,"citizens":785,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Ellay":{"shops":0,"houses":0,"citizens":632,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Brite":{"shops":0,"houses":0,"citizens":1482,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Falaise":{"shops":0,"houses":0,"citizens":573,"owner":"FatGiwafe#1829",
     "stores":[],
     "NPCs":[]
 },
     "Melleraut":{"shops":0,"houses":0,"citizens":739,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Lisieux":{"shops":0,"houses":0,"citizens":1732,"owner":"Eternal#3880",
     "stores":[],
     "NPCs":[]
 },
     "SaintGeorge":{"shops":0,"houses":0,"citizens":537,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Hebert":{"shops":0,"houses":0,"citizens":746,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Amebaut":{"shops":0,"houses":0,"citizens":281,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Eureux":{"shops":0,"houses":0,"citizens":2832,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Groffoeuure":{"shops":0,"houses":0,"citizens":1772,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Vallery":{"shops":0,"houses":0,"citizens":1381,"owner":"Xylaphone#6294",
     "stores":[],
     "NPCs":[]
 },
     "Veruille":{"shops":0,"houses":0,"citizens":2832,"owner":"xt101#2706",
     "stores":[],
     "NPCs":[]
 },
     "Goderuille":{"shops":0,"houses":0,"citizens":1772,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Baily":{"shops":0,"houses":0,"citizens":281,"owner":'julian#7918',
     "stores":[],
     "NPCs":[]
 },
     "Tote":{"shops":0,"houses":0,"citizens":2832,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Cuilly":{"shops":0,"houses":0,"citizens":1772,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Riberpre":{"shops":0,"houses":0,"citizens":281,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Encouy":{"shops":0,"houses":0,"citizens":2832,"owner":false,
     "stores":[],
     "NPCs":[]
 },
     "Hendicourt":{"shops":0,"houses":0,"citizens":1772,"owner":false,
     "stores":[],
     "NPCs":[]
}}


exports.townCitizens = function (town) {
    if (towns[town] === undefined){ return "Can't find that Town."}
    return towns[town].citizens + ' citizens live in ' + town + '.';
}
exports.townOwner = function (town){
    if (town === undefined) { return "Need to specify what Town."}
    if (towns[town].owner === false){ return town + ' is unclaimed.'}
    if (towns[town] === undefined){ return "Can't find that Town."}
    return towns[town].owner + ' owns ' + town + '.';
}
exports.giveTown = function (userID, target, town){
    if(userID !== "Eternal#3880"){ "You can't do that."}
    if (towns[town] === undefined){ return "Can't find that Town."}
    towns[town].owner = target;
    console.log("The owner of " + town + ' changes to ' + target);
    return target + ' recieved ' + town;
}
exports.takeTown = function (userID, town){
    if(userID !== "Eternal#3880"){ "You can't do that."}
    if (towns[town] === undefined){ return "Can't find that Town."}
    towns[town].owner = userID;
    console.log("The owner of " + town + ' changes to ' + userID);
    return userID + ' recieved ' + town;
}
exports.townTax = function (userID, town, message) {
    if(message.channel.id !== '585871634804637702'){ return "You're in the wrong channel, to go #taxes"}
    let character = characters.exportGetCharacter(userID);

        if (towns[town] === undefined){ return "Can't find that Town."}
        if(towns[town].owner === false){ return town + ' is unclaimed.' }
        if (towns[town].owner !== userID){ return "You don't own " + town + '.' }
        let townTax = Math.round(towns[town].citizens * 1.223);
            characters.moneyRecieve(character.pos, townTax);
            console.log(userID + ' got ' + townTax + ' deniers from collecting the tax from ' + town + '.');
            return 'You collected ' + townTax + ' deniers from ' + town + '.';
}
exports.checkTown = function (town){
    if (towns[town] === undefined){ return false }
    else { return true }
}
exports.increaseTownCitizens = function (userID, town, amount){
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    if (town === undefined || amount === undefined) { return 'Need more info.' }
    towns[town].citizens += Number(amount);
    return amount + " citizens has moved to " + town + '.';
}
exports.decreaseTownCitizens = function (userID, town, amount){
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    if (town === undefined || amount === undefined) { return 'Need more info.' }
    towns[town].citizens -= Number(amount);
    return amount + " citizens has moved from " + town + '.';
}
exports.exportTowns = function (){
    return towns;
}
exports.randomizeTownInventory = function (userID){
    if (userID !== "Eternal#3880"){ return "You can't do that."}
    for (let i = 0; Object.keys(towns).length > i; i++){
        
        towns[townNames[i]].store.grain = Math.floor(Math.random() * 120) + 1; 
        towns[townNames[i]].store.bread = Math.floor(Math.random() * 120) + 1; 
        towns[townNames[i]].store.ore = Math.floor(Math.random() * 120) + 1; 
        towns[townNames[i]].store.armor = Math.floor(Math.random() * 120) + 1; 
    }
}
exports.checkTownInventory = function (userID){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character."}

    let targetTown = character.bio.location;
    let result = towns[targetTown].store;
    console.log(userID + ' checked ' + targetTown + "'s inventory.")
    return targetTown + ' has ' + result.grain + ' grain, ' + result.bread + ' bread, ' + result.ore + ' ore and ' + result.armor + ' armor.' 
}
exports.sellPriceGrain = function (userID, amount){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character."}

    let targetTown = character.bio.location;
    let result = towns[targetTown].store;

    let townGrain = result.grain;
    let price =  20 - townGrain;
    
    return "For " + amount + " of grain, you'd get " + ((price + 100) * 1.5) * amount + ' deniers.';
}
exports.sellGrain = function (userID, amount){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character."}

    let targetTown = character.bio.location;
    let result = towns[targetTown].store;

    let townGrain = result.grain;
    let price =  20 - townGrain;
    let totalPrice = ((price + 100) * 1.5) * amount;
    characters.moneyRecieve(character.pos, totalPrice);
    return "You sold " + amount + ' grain for ' + totalPrice + ' deniers.';
}
exports.buyPriceGrain = function (userID, amount){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character."}

    let targetTown = character.bio.location;
    let result = towns[targetTown].store;

    let townGrain = result.grain;
    let price =  20 - townGrain;
    
    return "For " + amount + " of grain, you'd get " + ((price + 100) * 1.5) * amount + ' deniers.';
}

//////////////NPCS///////////

let NPCs = [];
let NPCNames = [];
let counter = 0;

function createNPC() {
    ++counter;
    return {
        character: {
            id: counter,
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            status: Math.floor(Math.random() * 5) + 1,
            purse: Math.floor(Math.random() * 1000) + 1,
            location: townNames[Math.floor(Math.random() * 27) + 0],
            street: faker.address.streetName(),
            skills: {
                mining: Math.floor(Math.random() * 10) + 1,
                smithing: Math.floor(Math.random() * 10) + 1,
                farming: Math.floor(Math.random() * 10) + 1,
                baking: Math.floor(Math.random() * 10) + 1
            }
        }
    }
}
function saveNPCS(){
fs.writeFile('./backups/npcs.json', JSON.stringify(NPCs), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved. File: " + './backups/npcs.json');
    return "JSON file has been saved. File: " + './backups/npcs.json';
})

fs.writeFile('./backups/npcNames.json', JSON.stringify(NPCNames), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved. File: " + './backups/npcNames.json');
    return "JSON file has been saved. File: " + './backups/npcNames.json';
})
}
function importNPCsToTown(){
    for (let i = 0; i < NPCs.length; i++){
        towns[NPCs[i].character.location].NPCs.push(NPCs[i].character.name)  
    }
}
exports.initiateNPCs = function(userID) {
    if (userID !== "Eternal#3880"){return "You can't do that."}
    for (let i = 0; i < 500; i++){
        NPCs.push(createNPC());
        NPCNames.push(NPCs[i].character.name);
    }
    importNPCsToTown();
    saveNPCS();
    return 'All NPCs has woken.';
}
function createBusiness (userID, name, businessType){
    console.log(businessType);
    return {
        business: {
            owner: userID,
            type: businessType,
            name: name,
            location: characters.exportGetCharacter(userID).bio.location,
            street: faker.address.streetPrefix() + ' ' + faker.address.streetName(),
            get earningRate() {
                return this.workers[0].character.skills[businessType];
            }, 
            workers: [
                
            ],
        }
    }
}
function initiateBusiness(userID, name, businessType){
    let character = characters.exportGetCharacter(userID)
    if (character === undefined){ return "Can't find your character."}
    towns[character.bio.location].stores.push(createBusiness(userID, name, businessType));
}
exports.openBusiness = function(userID, name, businessType){
    if (userID === undefined || name === undefined || businessType === undefined ){return 'Need more info.'}
    if(businessType !== 'smithing' && businessType !== 'mining' && businessType !== 'farming' && businessType !== 'baking'){ return 'Wrong business type.'}

    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character." }

    initiateBusiness(userID, name, businessType)
    console.log(userID + ' opened a ' + businessType + ' store in ' + character.bio.location);

    return 'You opened ' + name + ' in ' + character.bio.location;
}
exports.checkMyBusiness = function (userID){
    console.log('Chekcing')
    let shop = undefined;
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character.4" }

    for (let i = 0; i < towns[character.bio.location].stores.length; i++){
        if(towns[character.bio.location].stores[i].business.owner ===  userID){
            shop = towns[character.bio.location].stores[i].business;
            console.log(userID + ' is checking his store.');
            return 'Your shop ' + shop.name + ' is on ' + shop.street + ' and is making ' + shop.earningRate + ' deniers an hour.';
        } else {
            console.log(userID + ' tried to check his store.');
            return "Couldn't find your store."
        }
        
    }
}
exports.checkWorkers = function (userID){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character.3" };
    let workers = [];
    for (let i = 0; i < towns[character.bio.location].NPCs.length; i++){
        workers.push(towns[character.bio.location].NPCs[i]);
    }
    return workers;
}
exports.checkWorker = function (userID, workerLastname){
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character.2" };
    for (let i = 0; i < NPCs.length; i++){
        lastName = NPCs[i].character.name.split(' ');
        if (lastName[1] === workerLastname){ 
            return 'Name ' + NPCs[i].character.name + '\n' + 'Mining proficiency ' + NPCs[i].character.skills.mining + '\n' + 'Smithing proficiency ' + NPCs[i].character.skills.smithing + '\n' + 'Farming proficiency ' + NPCs[i].character.skills.farming + '\n' + 'Baking proficiency ' + NPCs[i].character.skills.baking; 
        };
    }
    
    return "Could not find that worker.";
}
exports.hireWorker = function (userID, workerLastname){
    let worker = exports.checkWorker(userID, workerLastname);
    if(worker === undefined){"Error with getting worker."}
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character1." };

    for (let i = 0; i < towns[character.bio.location].stores.length; i++){
        if(towns[character.bio.location].stores[i].business.owner === userID){
            towns[character.bio.location].stores[i].business.workers.push(worker);
            characters.moneyPay(character.pos, 1000)
        }
    }
    return "Can't find your store.";


}
exports.work = function (userID, message){
    console.log(message.channel.id)
    let character = characters.exportGetCharacter(userID);
    if (character === undefined){ return "Can't find your character1." };
    if(message.channel.id !== 'xxxx'){ return "You're in the wrong channel. Go to: #the-mine" }

    for (let i = 0; i < towns[character.bio.location].stores.length; i++){
        if(towns[character.bio.location].stores[i].business.owner ===  userID){
            shop = towns[character.bio.location].stores[i].business;
            console.log(userID + ' is working in his store and earned ' + shop.earningRate * 40 );
            characters.moneyRecieve(character.pos, shop.earningRate * 50);
            return 'You enter your shop ' + shop.name + ' and start working.';
        } else {
            console.log(userID + ' tried to check his store.');
            return "Couldn't find your store."
        }

}
}
