function getTheMaxProfitFromHistoricPrices(stockPrices: number[]): string {

    if (stockPrices.length < 2) {
        throw new Error(
          "Invalid input. Please provide a array of numbers with minimun 2 elements"
        );
      }
    
    let profit: number = 0;
    let sellPosition: number = 0;
    let buyPosition: number = 0;
    for (let i: number = 0; i < stockPrices.length; i++) {  
        let actualProfit: number = (stockPrices[i + 1] - stockPrices [i])
        if(actualProfit > profit){
            profit = actualProfit;
            sellPosition = i + 1;
            buyPosition = i;
        } 
    }
    
    let finalMessage = profit > 0 
        ? "Buy at $" + stockPrices[buyPosition].toFixed(2) + ", sell at $" + stockPrices[sellPosition].toFixed(2)  + ". Profit: $" + profit.toFixed(2)
        : "Don’t buy, profit can’t be made" 

    return finalMessage;
}

let stockPrices: number[] = [10, 11, 9.90, 10.91, 8];
console.log(getTheMaxProfitFromHistoricPrices(stockPrices));
