
var payRate = 15.70; 
var hoursWorked = 45; 


var regularPay = 0;
var overtimePay = 0;


if (hoursWorked <= 40) {
  regularPay = hoursWorked * payRate;
} else {
  regularPay = 40 * payRate;
  overtimePay = (hoursWorked - 40) * (payRate * 1.5);
}


var grossPay = regularPay + overtimePay;

console.log("Gross Pay: $" + grossPay.toFixed(2));


var payRate = 17.50; 
var hoursWorked = 45; 


var regularPay = 0;
var overtimePay = 0;


if (hoursWorked <= 40) {
  regularPay = hoursWorked * payRate;
} else {
  regularPay = 40 * payRate;
  overtimePay = (hoursWorked - 40) * (payRate * 1.5);
}


var grossPay = regularPay + overtimePay;

console.log("Gross Pay: $" + grossPay.toFixed(2));


var payRate = 90.50; 
var hoursWorked = 45; 


var regularPay = 0;
var overtimePay = 0;


if (hoursWorked <= 40) {
  regularPay = hoursWorked * payRate;
} else {
  regularPay = 40 * payRate;
  overtimePay = (hoursWorked - 40) * (payRate * 1.5);
}


var grossPay = regularPay + overtimePay;

console.log("Gross Pay: $" + grossPay.toFixed(2));
