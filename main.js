function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");

  await sleep(2000); // waits for 2 seconds

  console.log("End after 2 seconds");
}

demo();