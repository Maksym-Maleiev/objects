// Object
var cat = {
  "legs": 3,
  "name": "Harmony",
  "color": "Tortoiseshell" /* черепаховий */
};
cat;

// keys without double quotes
var cat = {
  legs: 3,
  name: "Harmony",
  color: "Tortoiseshell"
};
cat;

var cat = {
  legs: 3,
  "full name": "Harmony Philomena Snuggly-Pants Morgan",
  color: "Tortoiseshell"
};
cat;

var cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };
cat;

// we extract the value from the object
cat["name"];

cat.name;

var dog = {
  name: "Pancake",
  age: 6,
  color: "white",
  bark /* гавкання */: "Yip yap yip"
};

var cat = {
  name: "Harmony",
  age: 8,
  color: "tortoiseshell"
};

Object.keys(dog);
//-------------
Object.keys(cat);
//-------------

// add a value to an object
var object = {};

var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
cat;

// we add the keys using a dot notation
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";
cat;

//-------------
var dog = {
  name: "Pancake",
  legs: 4,
  isAwesome: true
};
dog.isBrown; /* <= mistake */

dog;

// we combine arrays and objects
var dinosaurs = [
  { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Triassic" }
];
dinosaurs[0];
dinosaurs[0]["name"];
dinosaurs[1].period;

// an array of friends
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
friends[0];