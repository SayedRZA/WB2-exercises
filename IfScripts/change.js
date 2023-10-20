// function calculateChange(paidAmount, totalPrice) {
//     let changeInCents = (paidAmount - totalPrice) * 100;
//     const quarters = Math.floor(changeInCents / 25);
//     const dimes = Math.floor((changeInCents % 25) / 10);
//     const nickels = Math.floor(((changeInCents % 25) % 10) / 5);
//     const pennies = changeInCents % 5;
  
//     console.log("Change:");
//     console.log("# of quarters: " + quarters);
//     console.log("# of dimes: " + dimes);
//     console.log("# of nickels: " + nickels);
//     console.log("# of pennies: " + pennies);
//   }
  

//   const paidAmount = 5.00;
//   const totalPrice = 3.27;
//   calculateChange(paidAmount, totalPrice);
  

  "use strict"

let cents = 55;

let numberOfQuaters = Math.floor(cents / 25);
cents = cents % 25;
let numberOfDimes = Math.floor(cents / 10);
cents = cents % 10;
let numberOfNickles = Math.floor(cents / 5);
cents = cents % 5;
let numberOfPenneies = (cents);

console.log("Quaters: " + numberOfQuaters);
console.log("Dimes: " + numberOfDimes);
console.log("Nickles: " + numberOfNickles);
console.log("Pennies: " + numberOfPenneies);