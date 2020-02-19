const timeout = ms =>
  new Promise(resolve => setTimeout(resolve, ms)).then(() => console.log("Done"));

await timeout(2000);
timeout(1000);

console.log("Start");
await Promise.all( [timeout(1000), timeout(3000), timeout(2000), timeout(500)] );
console.log("End");

// See also: Promise.race, Promise.allSettled
// Important concepts: catch, then, finally, resolve, reject