function setTimeoutPromisified(ms){
    return new Promise(resolve(setTimeout,300));

}
async function solve(){
    await setTimeoutPromisified(9000);

}

