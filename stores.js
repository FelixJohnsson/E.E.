const characters = require('./characterFunctions');

let blacksmithStore = {
    ore:0,
    oreSellPrize: 70,
    oreBuyPrize: 100,
    armor:92,
    armorSellPrize: 150,
    armorBuyPrize: 200,
}

let bakerStore = {
    grain: 0,
    grainSellPrize: 70,
    grainBuyPrize: 100,
    bread: 78,
    breadSellPrize: 150,
    breadBuyPrize: 200,
}

exports.checkBlacksmithStore = function (){
    let ore = 'The Metalsmith Inc has ' + blacksmithStore.ore + ' ores in their inventory, you can buy ores for ' + blacksmithStore.oreBuyPrize + '.';
    let armor = 'They also have ' + blacksmithStore.armor + ' armor pieces in their inventory, you can buy armor for ' + blacksmithStore.armorBuyPrize + '.';
    return ore + armor;
}
exports.checkBakerStore = function (){
    let grain = 'The Bread Inc has ' + bakerStore.grain + ' grain in their inventory, you can buy grain for ' + bakerStore.grainBuyPrize + '.';
    let bread = 'They also have ' + bakerStore.bread + ' bread in their inventory, you can buy bread for ' + bakerStore.breadBuyPrize + '.';
    return grain + bread;
}
//ORE & ARMOR 
exports.sellOre = function(userID, amount) {
    if (amount === NaN) { return "The amount has to be a number."}
    let character = characters.exportGetCharacter(userID);

    let payment = blacksmithStore.oreSellPrize * amount

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to sell ore.')
        return "Can't find your character." 
    }
    if (character.inventory.ore < amount){
        console.log(userID + ' tried to sell ore.')
        return "You don't have enough ore."
    }

    characters.moneyRecieve(character.pos, payment);
    characters.useItems(character.pos, 'ore', amount);
    blacksmithStore.ore += Number(amount);
    console.log(userID + ' sold ' + amount + ' ores.')
    return 'You sold ' + amount + ' ores for ' + payment + ' deniers.';
}

exports.buyOre = function(userID, amount) {
    let character = characters.exportGetCharacter(userID);

    let cost = blacksmithStore.oreBuyPrize * amount

    if (amount === NaN) { return "The amount has to be a number."}
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to buy ore.')
        return "Can't find your character." 
    }
    if (character.inventory.purse < cost) { return "You don't have enough money."}
    if (blacksmithStore.ore < amount){-
        console.log(userID + ' tried to buy ore.')
        return "The store only has " + blacksmithStore.ore + " ore."
    }

    characters.moneyPay(character.pos, cost);
    characters.getItems(character.pos, 'ore', amount);
    blacksmithStore.ore -= Number(amount);
    console.log(userID + ' bought ' + amount + ' ore.')
    return 'You bought ' + amount + ' ore for ' + cost + ' deniers.';
}

exports.sellArmor = function(userID, amount) {
    if (amount === NaN) { return "The amount has to be a number."}
    let character = characters.exportGetCharacter(userID);
    let payment = blacksmithStore.armorSellPrize * amount;

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to sell armor.')
        return "Can't find your character." 
    }
    if (character.inventory.armor < amount){
        console.log(userID + ' tried to sell armor.')
        return "You don't have enough armor."
    }
    
    characters.moneyRecieve(character.pos, payment);
    characters.useItems(character.pos, 'armor', amount);
    blacksmithStore.armor += Number(amount);
    console.log(userID + ' sold ' + amount + ' armor.')
    return 'You sold ' + amount + ' armor for ' + payment + ' deniers.';
}

exports.buyArmor = function(userID, amount) {
    let character = characters.exportGetCharacter(userID);

    let cost = blacksmithStore.armorBuyPrize * amount

    if (amount === NaN) { return "The amount has to be a number."}
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to buy armor.')
        return "Can't find your character." 
    }
    if (character.inventory.purse < cost) { return "You don't have enough money."}
    if (blacksmithStore.armor < amount){-
        console.log(userID + ' tried to buy armor.')
        return "The store only has " + blacksmithStore.armor + " armor."
    }

    characters.moneyPay(character.pos, cost);
    characters.getItems(character.pos, 'armor', amount);
    blacksmithStore.armor -= Number(amount);
    console.log(userID + ' bought ' + amount + ' armor.')
    return 'You bought ' + amount + ' armor for ' + cost + ' deniers.';
}
//GRAIN & BREAD
exports.sellGrain = function(userID, amount) {
    let character = characters.exportGetCharacter(userID);

    let payment = bakerStore.grainSellPrize * amount

    if (amount === NaN) { return "The amount has to be a number."}
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to sell grain.')
        return "Can't find your character." 
    }
    if (character.inventory.grain < amount){
        console.log(userID + ' tried to sell grain.')
        return "You don't have enough grain."
    }

    characters.moneyRecieve(character.pos, payment);
    characters.useItems(character.pos, 'grain', amount);
    bakerStore.grain += Number(amount);
    console.log(userID + ' sold ' + amount + ' grain.')
    return 'You sold ' + amount + ' grain for ' + payment + ' deniers.';
}

exports.buyGrain = function(userID, amount) {
    let character = characters.exportGetCharacter(userID);

    let cost = bakerStore.grainBuyPrize * amount

    if (amount === NaN) { return "The amount has to be a number."}
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to buy grain.')
        return "Can't find your character." 
    }
    if (character.inventory.purse < cost) { return "You don't have enough money."}
    if (bakerStore.grain < amount){-
        console.log(userID + ' tried to buy grain.')
        return "The store only has " + bakerStore.grain + " grain."
    }

    characters.moneyPay(character.pos, cost);
    characters.getItems(character.pos, 'grain', amount);
    bakerStore.grain -= Number(amount);
    console.log(userID + ' bought ' + amount + ' grain.')
    return 'You bought ' + amount + ' grain for ' + cost + ' deniers.';
}

exports.sellBread = function(userID, amount) {
    if (amount === NaN) { return "The amount has to be a number."}
    let character = characters.exportGetCharacter(userID);
    let payment = bakerStore.breadSellPrize * amount;

    if (character === null || character === undefined){ 
        console.log(userID + ' tried to sell bread.')
        return "Can't find your character." 
    }
    if (character.inventory.bread < amount){
        console.log(userID + ' tried to sell bread.')
        return "You don't have enough bread."
    }
    
    characters.moneyRecieve(character.pos, payment);
    characters.useItems(character.pos, 'bread', amount);
    bakerStore.bread += Number(amount);
    console.log(userID + ' sold ' + amount + ' bread.')
    return 'You sold ' + amount + ' bread for ' + payment + ' deniers.';
}

exports.buyBread = function(userID, amount) {
    let character = characters.exportGetCharacter(userID);

    let cost = bakerStore.breadBuyPrize * amount

    if (amount === NaN) { return "The amount has to be a number."}
    if (character === null || character === undefined){ 
        console.log(userID + ' tried to buy bread.')
        return "Can't find your character." 
    }
    if (character.inventory.purse < cost) { return "You don't have enough money."}
    if (bakerStore.bread < amount){-
        console.log(userID + ' tried to buy bread.')
        return "The store only has " + bakerStore.bread + " bread."
    }

    characters.moneyPay(character.pos, cost);
    characters.getItems(character.pos, 'bread', amount);
    bakerStore.bread -= Number(amount);
    console.log(userID + ' bought ' + amount + ' bread.')
    return 'You bought ' + amount + ' bread for ' + cost + ' deniers.';
}