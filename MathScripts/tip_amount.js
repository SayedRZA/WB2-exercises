
var billAmount = parseFloat(prompt("20:"));
var tipPercentage = parseFloat(prompt("15%:"));


if (isNaN(billAmount) || isNaN(tipPercentage)) {
  alert("Please enter valid numbers for the bill amount and tip percentage.");
} else {
  
  var tipAmount = (billAmount * (tipPercentage / 100));

 
  alert("Tip amount: $" + tipAmount.toFixed(2));
}
