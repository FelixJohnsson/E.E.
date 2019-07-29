const characters = require('./characterFunctions');

//JOBS
exports.miner = function(userID) {
    let character = characters.exportGetCharacter(userID);

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Miner job.')
        return "Can't find your character." 
    }
    if (character.jobs.miner === true) { return "You're already a Miner."}

        characters.changeJobs(character.pos, 'miner');
        characters.moneyPay(character.pos, 100);
        console.log(userID + ' got the Miner job.');
        return "You pay 100 deniers for mining equipment. You can now work as a Miner.";

}

exports.farmer = function(userID) {
    let character = characters.exportGetCharacter(userID);

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Farmer job.')
        return "Can't find your character." 
    }
    if (character.jobs.farmer === true) { return "You're already a Farmer."}

        characters.changeJobs(character.pos, 'farmer');
        characters.moneyPay(character.pos, 100);
        console.log(userID + ' got the Farmer job.');
        return "You pay 100 deniers for farming equipment. You can now work as a Farmer.";

}

exports.blacksmith = function(userID) {
    let character = characters.exportGetCharacter(userID);

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Blacksmith job.')
        return "Can't find your character." 
    }
    if (character.jobs.blacksmith === true) { return "You're already a Blacksmith."}

        characters.changeJobs(character.pos, 'blacksmith');
        characters.moneyPay(character.pos, 400);
        console.log(userID + ' got the Blacksmith job.');
        return "You pay 400 deniers for smithing equipment. You can now work as a Blacksmith.";
    
}

exports.baker = function(userID) {
    let character = characters.exportGetCharacter(userID);

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Baker job.')
        return "Can't find your character." 
    }
    if (character.jobs.baker === true) { return "You're already a Baker."}

        characters.changeJobs(character.pos, 'baker');
        characters.moneyPay(character.pos, 400);
        console.log(userID + ' got the Baker job.');
        return "You pay 400 deniers for baking equipment. You can now work as a Baker.";
    
}

//WORK
exports.workingMiner = function(userID, message) {
    let randomOre = Math.floor(Math.random() * 6) + 1;  
    let salary = 200;
    let character = characters.exportGetCharacter(userID);

    if(message.channel.id !== '587385143300325380'){ return "You're in the wrong channel. Go to: #the-mine" }

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Miner job.')
        return "Can't find your character." 
    }
    if (character.jobs.miner !== true){ return "You're not a Miner yet."}

    characters.salary(character.pos, salary, 'ore', randomOre)
    console.log(userID + " worked as a Miner.");
    return "You worked as a miner and earned " + salary + " deniers and collected " + randomOre + " ores."
}

exports.workingFarmer = function(userID, message) {

    let randomGrain = Math.floor(Math.random() * 6) + 1;  
    let salary = 200;
    let character = characters.exportGetCharacter(userID);

    if(message.channel.id !== '587313982126424064'){ return "You're in the wrong channel. Go to: #the-farm" }

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Farmer job.')
        return "Can't find your character." 
    }
    if (character.jobs.farmer !== true){ return "You're not a Farmer yet."}

    characters.salary(character.pos, salary, 'grain', randomGrain)
    console.log(userID + " worked as a Farmer.");
    return "You worked as a Farmer and earned " + salary + " deniers and collected " + randomGrain + " grain."
}

exports.workingBlacksmith = function(userID, message) {
    let character = characters.exportGetCharacter(userID);
    let ores = character.inventory.ore;
    let armor = Math.round(ores * 0.8);
    if(message.channel.id !== '587370058867802125'){ return "You're in the wrong channel. Go to: #the-blacksmith" }

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Blacksmith job.')
        return "Can't find your character." 
    }
    if (character.jobs.blacksmith !== true){ return "You're not a Blacksmith yet."}


    characters.getItems(character.pos, 'armor', armor);
    characters.useItems(character.pos, 'ore', ores);

    console.log(userID + " worked as a Blacksmith.");
    return "You worked as a Blacksmith and made " + armor + " armor from " + ores + ' ore.';
}

exports.workingBaker = function(userID, message) {
    let character = characters.exportGetCharacter(userID);
    let grain = character.inventory.grain;
    let bread = Math.round(grain * 0.8);
    if(message.channel.id !== '587370287151054848'){ return "You're in the wrong channel. Go to: #the-bakery" }

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to get the Baker job.')
        return "Can't find your character." 
    }
    if (character.jobs.baker !== true){ return "You're not a Baker yet."}


    characters.getItems(character.pos, 'bread', bread);
    characters.useItems(character.pos, 'grain', grain);

    console.log(userID + " worked as a Baker.");
    return "You worked as a Baker and baked " + bread + ' bread from ' + grain;
}


