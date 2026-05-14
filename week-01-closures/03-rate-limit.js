/*Exercise 3 — rateLimit (20 min)
Write rateLimit(fn, maxPerSecond). The wrapped function calls fn at most maxPerSecond times per second. Excess calls within the same second are silently dropped.
*/
function rateLimit(fn, maxPerSecond) {
  let count = 0;
  return function (msg) {
    if (count < maxPerSecond) {
      count++;
      setTimeout(() => {
        count--;
      }, 1000);
      return fn(msg);
    }
  };
}

const log = rateLimit((msg) => console.log(msg), 2);
log("a");
log("b");
log("c");
log("d"); // only "a" and "b" print
setTimeout(() => log("e"), 1100); // prints "e"
setTimeout(() => log("z"), 5000);
