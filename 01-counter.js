/*Exercise 1 — makeCounter
Write a function makeCounter() that returns a function. Each call to the returned function should return the next integer starting from 1.
Two counters made independently must not share state.*/
function makeCounter() {
  let c = 0;
  return function () {
    return ++c;
  };
}
const a = makeCounter();
const b = makeCounter();
console.log(
  a(), // 1
  a(), // 2
  b(), // 1   <-- not 3
  a(), // 3
);
