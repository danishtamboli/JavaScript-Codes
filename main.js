async function retry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}let count = 0;

async function test() {
  count++;
  if (count < 3) throw new Error("Fail");
  return "Success";
}

retry(test, 3)
  .then(console.log)   // "Success"
  .catch(console.error);