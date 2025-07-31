function callback(){
    console.log("Hello, World!");
}
setTimeoutPromisified(1000).then(callback).catch(console.error);
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}