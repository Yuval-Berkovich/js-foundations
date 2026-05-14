async function fetchUser() {
  console.log("fetching...");
  return { name: "Yuval" };
}
fetchUser().then((u) => console.log("got", u.name));
console.log("after call");

// fetching... after call got Yuval
