'use strict'

var stockTicker = "AAPL-Apple Inc.-173.48|HOG-Harley Davidson, Inc.-33.22|WMT-Walmart-83.43";

let stocks = stockTicker.split('|');

for (let stk of stocks) {
    let dash1, dash2
    dash1 = stk.indexOf('-');
    dash2 = stk.lastIndexOf('-');
    let symbol = stk.substring(0, dash1);
    let name = stk.substring(dash1+1, dash2);
    let price = stk.substring(dash2+1);

    console.log(`[${symbol}] ${name} $${price}/share`);
}