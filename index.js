function setTimeoutPromisified(ms){
    return new Promise(resolve =>setTimeout(resolve,ms))
}
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
}
    await setTimeoutPromisified(2000);{
    console.log("hello");
}
        
