// Problem 1 - Deep Equal
function deepEqual(objA, objB) {
  // if they are exactly the same thing, return true
  if (objA === objB) {
    return true;
  }

  // if one of them is not an object (or is null), they are not equal
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // different number of keys means they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // check every key
  for (const key of keysA) {
    // the key must exist in objB
    if (!keysB.includes(key)) {
      return false;
    }
    // compare the values (this calls itself for nested objects)
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
