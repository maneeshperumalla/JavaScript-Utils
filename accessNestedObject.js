/**
* search across a deeply nested Objects that have a property that matches the string
* @param {Object} object - Deeply Nested object to find the property
* @param {Array} keyValues - The nested object's keys array ['parent', 'child1', 'child2']
* @returns The object/value/property with the matching property name
*/

const findObjProperty = (nestedObj, keyValues) => {
  return keyValues.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
};

export default findObjProperty;
