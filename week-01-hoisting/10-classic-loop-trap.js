for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}

// 3 3 3 0 1 2 // setTimeout returns callback, var i creates a closure referencing the same i and let creates closure that contains the j at the time it was called
