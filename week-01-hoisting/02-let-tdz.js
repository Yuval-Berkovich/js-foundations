console.log(y);
let y = 5;
console.log(y);

// error // let and const declarations are hoisted but not initialized
// accessing them before the actual declaration line throws a ReferenceError.
// That dead zone between the start of the scope and the declaration is called the Temporal Dead Zone (TDZ).
