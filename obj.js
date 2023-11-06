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