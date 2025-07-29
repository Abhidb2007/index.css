function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Using it
setTimeoutPromisified(3000).then(() => {
  console.log("3 seconds passed");
});
