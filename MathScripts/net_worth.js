//  assets and debts
let totalAssets = 35.000;
let totalDebts = 17.000;


const assets = [10000, 5000, 20000];
const debts = [5000, 2000, 10000]; 


totalAssets = assets.reduce((total, asset) => total + asset, 0);
totalDebts = debts.reduce((total, debt) => total + debt, 0);


const netWorth = totalAssets - totalDebts;


console.log(`Total Assets: $${totalAssets}`);
console.log(`Total Debts: $${totalDebts}`);
console.log(`Net Worth: $${netWorth}`);




