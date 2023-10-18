
var totalPeople = 38; 

var vansNeeded = Math.ceil(totalPeople / 15);


var totalCost = vansNeeded * 250; 


var costPerPerson = totalCost / totalPeople;


console.log("Vans needed: " + vansNeeded);
console.log("Total cost: $" + totalCost);
console.log("Cost per person: $" + costPerPerson.toFixed(2));

