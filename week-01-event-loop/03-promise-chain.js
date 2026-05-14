console.log("A");
Promise.resolve()
  .then(() => console.log("B"))
  .then(() => console.log("C"));
console.log("D");

// A D B C
