// Primer sa intervjua:
const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  promise.then(() => {});
});
