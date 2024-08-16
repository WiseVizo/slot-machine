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

const spin = ()=>{
    const symbols = []
    for (const[symbol, count] of Object.entries(SYMBOLS_PER_SLOT)) {
        for(let i=0; i<count; i++){
            symbols.push(symbol)
        }    
    }
    const reelsArray = [[], [], []]
    for(let i=0; i<ROWS; i++){
        const reelsSymbols = [...symbols]
        for(let j=0; j<COLS; j++){
            const randomIndex = Math.floor(Math.random() * reelsSymbols.length)
            const selectedSymbol = reelsSymbols[randomIndex]
            reelsArray[i].push(selectedSymbol)
            reelsSymbols.splice(randomIndex, 1) // index , num items to remove
        }
    }
    console.log(reelsArray)
}

const ROWS = 3
const COLS = 3

const SYMBOLS_PER_SLOT = { // possible symbols in any given slot and their count
    "A":2,
    "B":3,
    "C":4,
    "D":5,
}

const SYMBOLS_VALUE =  {
    "A":5,
    "B":4,
    "C":3,
    "D":2,
}
spin()