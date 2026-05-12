/*Exercise 4 — makeBankAccount (15 min)
Write makeBankAccount(initial) that returns an object with three methods: deposit(amount), withdraw(amount), getBalance(). The balance must be impossible to read or change except through those methods. No .balance property.
*/
function makeBankAccount(initial) {
  let balance = initial;
  return {
    deposit: function (amount) {
      return (balance += amount);
    },
    withdraw: function (amount) {
      if (balance >= amount) {
        return (balance -= amount);
      }
      console.log("You are broke");
      return false;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const acc = makeBankAccount(100);
console.log(
  acc.deposit(50),
  acc.withdraw(30),
  acc.getBalance(), // 120
  acc.balance, // undefined — there is no such property
  acc.withdraw(200),
);
