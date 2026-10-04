// Problem 2 - Object Diff
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  // look through the new object
  for (const key of Object.keys(newObj)) {
    if (!(key in oldObj)) {
      // key is in new but not in old, so it was added
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      // key is in both but the value is different, so it changed
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  // look through the old object
  for (const key of Object.keys(oldObj)) {
    if (!(key in newObj)) {
      // key is in old but not in new, so it was removed
      removed[key] = oldObj[key];
    }
  }

  return { added, removed, changed };
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" }
  )
);
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
