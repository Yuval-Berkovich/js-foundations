for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("timer", i), 0);
  Promise.resolve().then(() => console.log("promise", i));
}
console.log("done");

// done promise0 promise1 promise2 timer0 timer1 timer2 CQ timer0 MQ promise0
