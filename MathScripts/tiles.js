
var length = 10;  
var width = 12; 

var roomArea = length * width;

var tilesNeeded = roomArea * 1.1; 


var tilesPerBox = 12;
var boxesNeeded = Math.ceil(tilesNeeded / tilesPerBox);

console.log("You need to buy " + boxesNeeded + " boxes of tiles.");
