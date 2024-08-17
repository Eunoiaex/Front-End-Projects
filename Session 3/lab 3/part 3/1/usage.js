// 1. Object.create()
// The Object.create() method creates a new object with the specified prototype object and properties.
// Here, we create a prototype object 'personPrototype' with a method 'greet'.
const personPrototype = {
    greet() {
        console.log("Hello!"); // This method will be inherited by objects created from 'personPrototype'.
    }
};

// We create a new object 'john' using 'personPrototype' as its prototype.
const john = Object.create(personPrototype);
john.greet(); // Output: "Hello!" - 'john' can use the 'greet' method because it inherits from 'personPrototype'.

// 2. Object.assign()
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// In this example, 'target' is the object we want to modify, and 'source' contains properties we want to add.

const target = { a: 1 }; // The initial target object with one property 'a'.
const source = { b: 2, c: 3 }; // The source object with properties 'b' and 'c'.

// Merge the properties from 'source' into 'target'. The original 'target' is modified.
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 } - The target now has the properties from the source object.

// 3. Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names (keys).
const objKeys = { x: 10, y: 20, z: 30 }; // An object with three properties 'x', 'y', and 'z'.

// Get an array of the object's keys.
const keys = Object.keys(objKeys);
console.log(keys); // Output: ['x', 'y', 'z'] - This is an array of the keys in the object.

// 4. Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values.
const values = Object.values(objKeys); // Get an array of the object's values.
console.log(values); // Output: [10, 20, 30] - This is an array of the values corresponding to the keys.

// 5. Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable key-value pairs.
const entries = Object.entries(objKeys); // Get an array of the object's key-value pairs.
console.log(entries); // Output: [['x', 10], ['y', 20], ['z', 30]] - Each key-value pair is represented as a sub-array.

// 6. Object.freeze()
// The Object.freeze() method freezes an object, preventing new properties from being added and existing properties from being changed or deleted.
const frozenObj = { a: 1, b: 2 }; // An object we want to freeze.

// Freeze the object so no modifications can be made.
Object.freeze(frozenObj);

// Attempt to modify a property (this will silently fail in non-strict mode).
frozenObj.a = 42;
console.log(frozenObj.a); // Output: 1 - The modification didn't take effect because the object is frozen.

// 7. Object.seal()
// The Object.seal() method seals an object, preventing new properties from being added, but allowing modifications to existing properties.
const sealedObj = { c: 3, d: 4 }; // An object we want to seal.

// Seal the object to prevent adding new properties but allow modification of existing ones.
Object.seal(sealedObj);

// Modify an existing property - this is allowed because the object is sealed but not frozen.
sealedObj.c = 30;
console.log(sealedObj.c); // Output: 30 - The modification was successful.

// Attempt to delete a property (this will fail because the object is sealed).
delete sealedObj.d;
console.log(sealedObj.d); // Output: 4 - The deletion didn't occur because the object is sealed.

// 8. Object.getOwnPropertyDescriptor()
// The Object.getOwnPropertyDescriptor() method returns a property descriptor for a named property on an object.
// A property descriptor provides details about the property, such as its value and whether it is writable, enumerable, and configurable.

const descObj = { e: 5 }; // An object with a property 'e'.

// Get the descriptor for property 'e'.
const descriptor = Object.getOwnPropertyDescriptor(descObj, 'e');
console.log(descriptor); // Output: { value: 5, writable: true, enumerable: true, configurable: true } - Detailed info about 'e'.

// 9. Object.getPrototypeOf()
// The Object.getPrototypeOf() method returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.
const protoObj = Object.create(personPrototype); // Create an object with 'personPrototype' as its prototype.

// Get the prototype of 'protoObj'.
const proto = Object.getPrototypeOf(protoObj);
console.log(proto === personPrototype); // Output: true - 'protoObj' inherits from 'personPrototype'.

// 10. Object.defineProperty()
// The Object.defineProperty() method defines a new property directly on an object or modifies an existing property, with control over its descriptors.
const defineObj = {}; // An empty object where we'll define a new property.

// Define a new property 'f' on 'defineObj' with specific attributes (descriptors).
Object.defineProperty(defineObj, 'f', {
    value: 42, // The value of the property.
    writable: false, // The property cannot be changed after its initial definition.
    enumerable: true, // The property will appear in object enumerations (like in a for...in loop).
    configurable: true // The property can be deleted or modified (except its 'writable' attribute).
});

// Access the property.
console.log(defineObj.f); // Output: 42

// Attempt to modify the property (this will fail because 'writable' is set to false).
defineObj.f = 100;
console.log(defineObj.f); // Output: 42 - The modification didn't take effect because 'f' is not writable.