
var a = 10;
var b = 5;
var c = 15;


if (a <= b && a <= c) {
    console.log("The smallest number is a: " + a);
} else if (b <= a && b <= c) {
    console.log("The smallest number is b: " + b);
} else {
    console.log("The smallest number is c: " + c);
}


if (a >= b && a >= c) {
    console.log("The largest number is a: " + a);
} else if (b >= a && b >= c) {
    console.log("The largest number is b: " + b);
} else {
    console.log("The largest number is c: " + c);
}