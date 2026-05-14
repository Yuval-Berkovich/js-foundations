console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// A D B C
/*demonstrates that microtasks (.then) run before macrotasks (setTimeout), even when the setTimeout was scheduled first.*/
