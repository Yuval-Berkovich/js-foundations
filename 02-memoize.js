/*Exercise 2 — memoize
Write memoize(fn) that takes any function and returns a new function with the same behavior, but caches results.
Calling with the same single argument should not re-run fn.
*/

function memoize(fn) {
  let obj = {};

  return function (n) {
    if (n in obj) {
      return obj[n];
    }
    return (obj[n] = fn(n));
  };
}

const slowSquare = (n) => {
  console.log("computing");
  return n * n;
};
const fast = memoize(slowSquare);
console.log(
  fast(5), // logs "computing", returns 25
  fast(5), // no log, returns 25 from cache
  fast(6), // logs "computing", returns 36
);
