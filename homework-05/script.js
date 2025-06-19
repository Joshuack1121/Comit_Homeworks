let person1 = {
  name: "Alice",
  age: 25
};

let person2 = { ...person1 };
person2.favoriteColor = "blue";

console.log("Original person:", person1);
console.log("Copied person:", person2);

// String – text
let exampleString = "Hello";

// Number – numeric value
let exampleNumber = 42;

// Boolean – true or false
let exampleBoolean = true;

// Null – intentionally empty value
let exampleNull = null;

// Undefined – variable declared but not assigned
let exampleUndefined;

// ===== 7. When should you use an object? =====
// Use an object when you want to group different related properties.

// ===== 8. When should you use an array? =====
// Use an array when you want to store a list of similar items.

function introduce(name, favoriteColor) {
  console.log(`My name is ${name} and my favorite color is ${favoriteColor}`);
}

introduce("Alice", "blue");

