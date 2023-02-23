const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const day = days[d.getDay()];

document.getElementById("itsYear").innerHTML = "It is " + day + " my dudes";

const gems = ["Ruby", "Sapphire", "Diamond", "Emerald", "Opal", "Amethyst", "Garnet",];
gemJoin = gems.join(", ")

document.getElementById("gemSort").innerHTML = gemJoin;

function sorting() {
    gems.sort();
    gemNew = gems.join(", ")
    document.getElementById("gemSort").innerHTML = gemNew;
  }

function Laptop(type, year, color){
    this.type = type;
    this.year = year;
    this.color = color;
    this.changeLap = function (type, color) {
        this.type = type;
        this.color = color;
      }
}
const myLaptop = new Laptop("Windows XP", "2001", "black")

document.getElementById("myLaptop").innerHTML = `I own a ${myLaptop.color} ${myLaptop.type} laptop. It's from ${myLaptop.year}.`;

function upLap(){
    myLaptop.changeLap("Windows 10", "red");
    document.getElementById("myLaptop").innerHTML = `I now own a ${myLaptop.color} ${myLaptop.type} laptop.`;
}
