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

friends[1].luckyNumbers;

friends[2].name;

friends[0].luckyNumbers[1];

// examine objects in the console
friends[1];

// Where objects will come in handy?
// we conduct personal accounting
var owedMoney = {}; /* owe - бути в боргу перед кимось; owed money - заборгував гроші */
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;

owedMoney["Jimmy"];

owedMoney["Jimmy"];
// undefined

owedMoney["Jimmy"] += 3;
owedMoney["Jimmy"];

// we store information about your movies
var movies = {
  "Finding Nemo": {
    releaseData: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseData: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and Goblet of Fire": {
    releaseData: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blue-ray"
  }
};
movies;

var findingNemo = movies["Finding Nemo"];
findingNemo.duration;

findingNemo.format;

var cars = {
  releaseData: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blue-ray"
};
movies["Cars"] = cars;

var hobbit = {
  releaseData: 2012,
  duration: 169,
  actors: ["Ian McKellen", "Martin Freeman", "Richard Armitage"],
  format: "Blue-ray"
}

movies["TheHobbit"] = hobbit;