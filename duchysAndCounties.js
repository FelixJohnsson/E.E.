const characters = require('./characterFunctions');

let duchysAndCounties = {

    Donadieu: {
        owner: false,
        tax: 2000,
        DonadieuWest: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        DonadieuCenter: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        DonadieuEast: {
            owner: false,
            cities: 3,
            tax: 750,
        }
    },
    Allaire: {
        owner: false,
        tax: 2000,
        AllaireWest: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        AllaireCenter: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        AllaireEast: {
            owner: false,
            cities: 3,
            tax: 750,
        }
    },
    Chaumont: {
        owner: false,
        tax: 2000,
        ChaumontWest: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        ChaumontCenter: {
            owner: false,
            cities: 3,
            tax: 750,
        },
        ChaumontEast: {
            owner: false,
            cities: 3,
            tax: 750,
        }
    }
}


exports.duchyTax = function (userID, duchy, message) {
    if(message.channel.id !== '585871634804637702'){ return "You're in the wrong channel, to go #taxes"}
    if (duchy === 'Donadieu'){ 
        if(duchysAndCounties.Donadieu.owner === false){ return 'Donadieu is unclaimed.' }
        if (duchysAndCounties.Donadieu.owner !== userID){ return "You don't own Donadieu." }
        if (duchysAndCounties.Donadieu.owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Donadieu.tax);
            console.log(userID + ' got ' + duchysAndCounties.Donadieu.tax + ' deniers from collecting the tax from Donadieu.');
            return 'You collected ' + duchysAndCounties.Allaire.tax + ' deniers from Donadieu.';
        }
    }
    if (duchy === 'Allaire'){ 
        if(duchysAndCounties.Allaire.owner === false){ return 'Allaire is unclaimed.' }
        if (duchysAndCounties.Allaire.owner !== userID){ return "You don't own Allaire." }
        if (duchysAndCounties.Allaire.owner === userID){
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Allaire.tax);
            console.log(userID + ' got ' + duchysAndCounties.Allaire.tax + ' deniers from collecting the tax from Allaire.');
            return 'You collected ' + duchysAndCounties.Allaire.tax + ' deniers from Allaire.';
        }
    }
    if (duchy === 'Chaumont'){ 
        if(duchysAndCounties.Chaumont.owner === false){ return 'Chaumont is unclaimed.' }
        if (duchysAndCounties.Chaumont.owner !== userID){ return "You don't own Chaumont." }
        if (duchysAndCounties.Chaumont.owner === userID){
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Chaumont.tax);
            console.log(userID + ' got ' + duchysAndCounties.Chaumont.tax + ' deniers from collecting the tax from Chaumont.');
            return 'You collected ' + duchysAndCounties.Chaumont.tax + ' deniers from Chaumont.';
    }
    }
    return 'Error.'
}
exports.countyTax = function (userID, county) {
    if(message.channel.id !== '585871634804637702'){ return "You're in the wrong channel, to go #taxes"}
    if (county === 'DonadieuWest'){ 
        if(duchysAndCounties.Donadieu[county].owner === false){ return 'DonadieuWest is unclaimed.' }
        if (duchysAndCounties.Donadieu[county].owner !== userID){ return "You don't own DonadieuWest." }
        if (duchysAndCounties.Donadieu[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Donadieu[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Donadieu[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Donadieu[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'DonadieuCenter'){ 
        if(duchysAndCounties.Donadieu[county].owner === false){ return 'DonadieuCenter is unclaimed.' }
        if (duchysAndCounties.Donadieu[county].owner !== userID){ return "You don't own DonadieuCenter." }
        if (duchysAndCounties.Donadieu[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Donadieu[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Donadieu[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Donadieu[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'DonadieuEast'){ 
        if(duchysAndCounties.Donadieu[county].owner === false){ return 'DonadieuEast is unclaimed.' }
        if (duchysAndCounties.Donadieu[county].owner !== userID){ return "You don't own DonadieuEast." }
        if (duchysAndCounties.Donadieu[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Donadieu[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Donadieu[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Donadieu[county].tax + ' deniers from ' + county + '.';
        }
    }

    if (county === 'AllaireWest'){ 
        if(duchysAndCounties.Allaire[county].owner === false){ return 'AllaireWest is unclaimed.' }
        if (duchysAndCounties.Allaire[county].owner !== userID){ return "You don't own AllaireWest." }
        if (duchysAndCounties.Allaire[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Allaire[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Allaire[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Allaire[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'AllaireCenter'){ 
        if(duchysAndCounties.Allaire[county].owner === false){ return 'AllaireCenter is unclaimed.' }
        if (duchysAndCounties.Allaire[county].owner !== userID){ return "You don't own AllaireCenter." }
        if (duchysAndCounties.Allaire[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Allaire[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Allaire[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Allaire[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'AllaireEast'){ 
        if(duchysAndCounties.Allaire[county].owner === false){ return 'AllaireEast is unclaimed.' }
        if (duchysAndCounties.Allaire[county].owner !== userID){ return "You don't own AllaireEast." }
        if (duchysAndCounties.Allaire[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Allaire[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Allaire[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Allaire[county].tax + ' deniers from ' + county + '.';
        }
    }

    if (county === 'ChaumontWest'){ 
        if(duchysAndCounties.Chaumont[county].owner === false){ return 'ChaumontWest is unclaimed.' }
        if (duchysAndCounties.Chaumont[county].owner !== userID){ return "You don't own ChaumontWest." }
        if (duchysAndCounties.Chaumont[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Chaumont[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Chaumont[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Chaumont[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'ChaumontCenter'){ 
        if(duchysAndCounties.Chaumont[county].owner === false){ return 'ChaumontCenter is unclaimed.' }
        if (duchysAndCounties.Chaumont[county].owner !== userID){ return "You don't own ChaumontCenter." }
        if (duchysAndCounties.Chaumont[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Chaumont[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Chaumont[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Chaumont[county].tax + ' deniers from ' + county + '.';
        }
    }
    if (county === 'ChaumontEast'){ 
        if(duchysAndCounties.Chaumont[county].owner === false){ return 'ChaumontEast is unclaimed.' }
        if (duchysAndCounties.Chaumont[county].owner !== userID){ return "You don't own ChaumontEast." }
        if (duchysAndCounties.Chaumont[county].owner === userID){ 
            let character = characters.exportGetCharacter(userID);
            characters.moneyRecieve(character.pos, duchysAndCounties.Chaumont[county].tax);
            console.log(userID + ' got ' + duchysAndCounties.Chaumont[county].tax + ' deniers from collecting the tax from ' + county + '.');
            return 'You collected ' + duchysAndCounties.Chaumont[county].tax + ' deniers from ' + county + '.';
        }
    }
    return 'Error.'
}

exports.giveDuchy = function (userID, target, duchy) {
    if(userID !== "Eternal#3880"){ "You can't do that."}
    if (duchy === 'Donadieu'){ 
        duchysAndCounties.Donadieu.owner = target;
        return target + ' recieved ' + duchy;
    }
    if (duchy === 'Allaire'){ 
        duchysAndCounties.Allaire.owner = target;
        return target + ' recieved ' + duchy;
    }
    if (duchy === 'Chaumont'){ 
        duchysAndCounties.Chaumont.owner = target
        return target + ' recieved ' + duchy;
    }
    return 'Error.';
}
exports.giveCounty = function (userID, target, county) {
    if(userID !== "Eternal#3880"){ "You can't do that."}
    if (county === 'DonadieuWest'){ 
        duchysAndCounties.Donadieu[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'DonadieuCenter'){ 
        duchysAndCounties.Donadieu[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'DonadieuEast'){ 
        duchysAndCounties.Donadieu[county].owner = target;
        return target + ' recieved ' + county;
    }

    if (county === 'AllaireWest'){ 
        duchysAndCounties.Allaire[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'AllaireCenter'){ 
        duchysAndCounties.Allaire[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'AllaireEast'){ 
        duchysAndCounties.Allaire[county].owner = target;
        return target + ' recieved ' + county;
    }

    if (county === 'ChaumontWest'){ 
        duchysAndCounties.Chaumont[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'ChaumontCenter'){ 
        duchysAndCounties.Chaumont[county].owner = target;
        return target + ' recieved ' + county;
    }
    if (county === 'ChaumontEast'){ 
        duchysAndCounties.Chaumont[county].owner = target;
        return target + ' recieved ' + county;
    }
    return 'Error.';
}
exports.takeDuchy = function (userID, duchy){
if(userID !== "Eternal#3880"){ "You can't do that."}
if (duchysAndCounties[duchy] === undefined){ return "Can't find that Duchy."}
duchysAndCounties[duchy].owner = userID;
console.log("The owner of " + duchy + ' changes to ' + userID);
return userID + ' recieved ' + duchy;
}
exports.takeCounty = function (userID, county) {
    if(userID !== "Eternal#3880"){ "You can't do that."}
    if (county === 'DonadieuWest'){ 
        duchysAndCounties.Donadieu[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'DonadieuCenter'){ 
        duchysAndCounties.Donadieu[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'DonadieuEast'){ 
        duchysAndCounties.Donadieu[county].owner = userID;
        return userID + ' recieved ' + county;
    }

    if (county === 'AllaireWest'){ 
        duchysAndCounties.Allaire[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'AllaireCenter'){ 
        duchysAndCounties.Allaire[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'AllaireEast'){ 
        duchysAndCounties.Allaire[county].owner = userID;
        return userID + ' recieved ' + county;
    }

    if (county === 'ChaumontWest'){ 
        duchysAndCounties.Chaumont[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'ChaumontCenter'){ 
        duchysAndCounties.Chaumont[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    if (county === 'ChaumontEast'){ 
        duchysAndCounties.Chaumont[county].owner = userID;
        return userID + ' recieved ' + county;
    }
    return 'Error.';
}
exports.duchyOwner = function (duchy){
    console.log(duchy);
    console.log(duchysAndCounties[duchy]);
    if (duchy === undefined) { return "Need to specify what Duchy."}
    if (duchysAndCounties[duchy] === undefined){ return "Can't find that Duchy." }
    if (duchysAndCounties[duchy].owner === false){ return "No one owns " + duchy }
    return duchysAndCounties[duchy].owner + ' owns ' + duchy + '.';
}
exports.countyOwner = function (county){
    if (county === undefined) { return "Need to specify what County."}
    
    if (county === 'DonadieuWest'){ 
        if (duchysAndCounties.Donadieu[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Donadieu[county].owner  + ' owns ' + county + '.';
    }
    if (county === 'DonadieuCenter'){ 
        if (duchysAndCounties.Donadieu[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Donadieu[county].owner + ' owns ' + county + '.';
    }
    if (county === 'DonadieuEast'){
        if (duchysAndCounties.Donadieu[county].owner === false) { return "No one owns " + county } 
        return duchysAndCounties.Donadieu[county].owner + ' owns ' + county + '.';
    }

    if (county === 'AllaireWest'){ 
        if (duchysAndCounties.Allaire[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Allaire[county].owner + ' owns ' + county + '.';
    }
    if (county === 'AllaireCenter'){ 
        if (duchysAndCounties.Allaire[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Allaire[county].owner + ' owns ' + county + '.';
    }
    if (county === 'AllaireEast'){ 
        if (duchysAndCounties.Allaire[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Allaire[county].owner + ' owns ' + county + '.';
    }

    if (county === 'ChaumontWest'){ 
        if (duchysAndCounties.Chaumont[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Chaumont[county].owner + ' owns ' + county + '.';
    }
    if (county === 'ChaumontCenter'){ 
        if (duchysAndCounties.Chaumont[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Chaumont[county].owner + ' owns ' + county + '.';
    }
    if (county === 'ChaumontEast'){ 
        if (duchysAndCounties.Chaumont[county].owner === false) { return "No one owns " + county }
        return duchysAndCounties.Chaumont[county].owner + ' owns ' + county + '.';
    }
    return "Can't find that County."
}

exports.duchyWar = function (userID, ownedDuchy, targetDuchy){
    if(ownedDuchy === undefined || targetDuchy === undefined){ return "Need more info." }
    if(duchysAndCounties[ownedDuchy].owner !== userID){ return "You don't own that Duchy." }
    return userID + ' declared Duchy war on ' + targetDuchy + '. Contact ' + duchysAndCounties[targetDuchy].owner + '.';
}
exports.countyWar = function (userID, ownedCounty, targetCounty){
    if(ownedCounty === undefined || targetCounty === undefined){ return "Need more info." }
    if(duchysAndCounties[ownedCounty].owner !== userID){ return "You don't own that County." }
    return userID + ' declared County war on ' + targetCounty + '. Contact ' + duchysAndCounties[targetDuchy].owner + '.';
}