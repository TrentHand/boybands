var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
// var loopCount = 5;

// // Keep track of which band we're on in the loop
// var currentBand = "";

// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }

var boyBands = document.getElementById("boy-bands");
var veggies = document.getElementById("vegetables");

for (var i = 0; i < bands.length; i++) {
	boyBands.innerHTML += "<div id='boy-bands'>" + bands[i] + "</div>";
console.log(boyBands);

}

for (var i = 0; i < vegetables.length; i++) {
	veggies.innerHTML += "<div id='vegetables'>" + vegetables[i] + "</div>";
console.log(vegetables);

}
