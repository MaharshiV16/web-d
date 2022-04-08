let count = 0;
let meter = 0;
let feet = 0;
let gallon = 0;
let litre = 0;
let pound = 0;
let kilo = 0;

function input() {
  count = prompt("Enter Value !!!");
}

input();
document.getElementById("count").innerText = count;

feet = (3.28084 * count).toFixed(3);
meter = (0.3048 * count).toFixed(3);

gallon = (0.264172 * count).toFixed(3);
litre = (3.78541 * count).toFixed(3);

pound = (2.20462 * count).toFixed(3);
kilo = (0.453592 * count).toFixed(3);

document.getElementById("length").innerText =
  count +
  " meters = " +
  feet +
  " feet | " +
  count +
  " feet = " +
  meter +
  " meters";

document.getElementById("volume").innerText =
  count +
  " litres = " +
  gallon +
  " gallons | " +
  count +
  " gallons = " +
  litre +
  " litres";

document.getElementById("weight").innerText =
  count +
  " kilos = " +
  pound +
  " pounds | " +
  count +
  " pounds = " +
  kilo +
  " kilos";

console.log(feet);
console.log(meter);
console.log(gallon);
console.log(litre);
console.log(pound);
console.log(kilo);
