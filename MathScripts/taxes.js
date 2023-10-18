
var salary = 1000; 
var taxRate = 23; 


var withheldTaxes = (salary * (taxRate / 100));


console.log("The amount withheld for federal taxes is: $" + withheldTaxes.toFixed(2));
