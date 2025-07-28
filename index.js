function setTimeoutPromisified(ms){
    return new Promise(resolve(setTimeout,3000));

}
async function solve(){
    await setTimeoutPromisified(6000);

}

