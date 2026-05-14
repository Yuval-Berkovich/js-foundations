async function a() {
  console.log("A1");
  await b();
  console.log("A2");
}
async function b() {
  console.log("B1");
  await Promise.resolve();
  console.log("B2");
}
a();
console.log("end");

//A1 B1 end B2 A2  a -> A1 b -> B1 CQ  MQ B2 A2
