// Problem 5 - Schema Validator
function validateSchema(obj, schema) {
  const errors = [];

  // go through every key in the schema
  for (const key of Object.keys(schema)) {
    const expectedType = schema[key];

    if (!Object.hasOwn(obj, key)) {
      // the key is missing from the object
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== expectedType) {
      // the key is there but the type is wrong
      errors.push(`${key}: expected ${expectedType}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}

const schema = { name: "string", age: "number", isAdmin: "boolean" };
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
