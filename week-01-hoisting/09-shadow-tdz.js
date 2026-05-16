let x = 1;
function foo() {
  console.log(x);
  let x = 2;
}
foo();

// error
