//comparing two json object same properties without order

function areEqual(obj1, obj2) {
  // Convert objects to strings with sorted properties
  const stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  // Compare the stringified objects
  return stringifiedObj1 === stringifiedObj2;
}

// Example usage
const json1 = { name: "Person 1", age: 5 };
const json2 = { age: 5, name: "Person 1" };

console.log(areEqual(json1, json2)); // Output: true
