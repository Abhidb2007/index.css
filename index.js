function setTimeoutPromisified(ms) {
    return new Promise(resolve =>setTimeout(resolve,ms));
}
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified(4000);
})
.then(function(){
    console.log("helloe");
    return setTimeoutPromisified(2000);
})
.then(function(){
    console.log("world");
})