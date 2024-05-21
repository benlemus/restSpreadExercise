// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//Refactored
const filterOutOdds = (...nums) => nums.filter((val) => val % 2 === 0);

// returns the smallest argument
const findMin = (...nums) => Math.min(...nums);

// returns a new object which contains all the keys and values of the first object and second object
const mergeObjects = (obj, obj2) => ({ ...obj, ...obj2 });

// return a new array with the original array values and all of additional arguments doubled
const doubleAndReturnArgs = (arr, ...nums) => [
  ...arr,
  ...nums.map((val) => val * 2),
];

// remove a random element in the items array and return a new array without that item.

// const items = ["pencil", "laptop", "water bottle", "mouse"];

const removeRandom = (items) => {
  let ranIdx = Math.floor(Math.random() * items.length);
  console.log(ranIdx);
  return [...items.slice(0, ranIdx), ...items.slice(ranIdx + 1)];
};

// Return a new array with every item in array1 and array2.
const extend = (arr1, arr2) => [...arr1, ...arr2];

// Return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// Return a new object with a key removed

// let about = { name: "ben", age: 23, petOwner: "yes" };

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// Combine two objects and return a new object
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// Return a new object with a modified key and value
const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};
// makes a new object then overwrites key and value
