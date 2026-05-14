/*Exercise 5 — The loop trap (15 min)
Here's classic broken code. Type it exactly as shown, run it, observe the output:
What does it print and why?
Fix it without using let. (Hint: IIFE or a helper function — both rely on creating a fresh closure scope.)
Now change var to let. Why does that fix it for free? What's actually different about let?

1. Why "3 3 3"?
   `var i` creates ONE variable shared across all loop iterations. All three
   setTimeout callbacks close over the SAME `i` — they hold a reference, not
   a snapshot of its value. By the time the 100ms timers fire, the loop has
   finished and i === 3. All three callbacks read the same i and print 3.

2. Fix without `let`: IIFE.
   Wrap the loop body in a function that takes the current i as a parameter
   (renamed `j`) and call it immediately on each iteration. Each call
   creates a new function scope with its own j, so each setTimeout captures
   a different j. Pre-`let` (before 2015), this was the standard workaround:
   every function call creates a new scope, which is what we need.

3. Why does `let` fix it for free?
   `let` in a `for` header creates a fresh binding per iteration. Each pass
   through the loop gets its own brand-new i, scoped to that iteration's
   block. Each closure captures a different i. Same idea as the IIFE, but
   built into the language.
*/

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 100);
  })(i);
}
