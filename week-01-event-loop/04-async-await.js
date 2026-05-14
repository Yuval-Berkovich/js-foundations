async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
console.log("C");
foo();
console.log("D");

//C A D B
