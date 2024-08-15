const prompt = require("prompt-sync")();
const getDepositAmount = ()=>{
    while(true){
    const amount = prompt("enter the deposit amount: ")
    const validAmount = parseFloat(amount)
    if (isNaN(validAmount)||validAmount<=0){
        console.log("invalid deposit amount. try again ")
        continue
    }
    return validAmount
    }
}

const getNumberOfLines = ()=>{
    while(true){
    const lines = prompt("enter the number of lines you want to bet in out of 3(1-3): ")
    const validLines = parseInt(lines)
    if (isNaN(validLines)||validLines<=0 || validLines>3){
        console.log("invalid number of lines. try again ")
        continue
    }
    return validLines
    }
}

const getBetAmount = (balance, numLines)=>{
    while(true){
        const bet = prompt("how much would u like to bet? ")
        const vaildBet = parseFloat(bet)
        if(isNaN(vaildBet) || vaildBet>(balance/numLines)|| vaildBet<=0){
            console.log("invalid bet amount. try again ")
            continue
        }
        return vaildBet
    }
}


console.log(getBetAmount(getDepositAmount(), getNumberOfLines()))
