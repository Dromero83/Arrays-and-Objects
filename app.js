const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const day = days[d.getDay()];

document.getElementById("itsYear").innerHTML = "It is " + day + " my dudes";

const gems = ["Ruby", "Sapphire", "Diamond", "Emerald", "Opal", "Amethyst", "Garnet",];
gems.sort();
const gemJoin = gems.join(", ")

document.getElementById("gemSort").innerHTML = gemJoin;

//remember to add method buttons later!