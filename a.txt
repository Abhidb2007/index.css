function setTimeoutPromised(ms){
  let p = new Promise(resolve=>setTimeout(resolve,ms));
  return p;
  
}
function callback(){
  console.log("3 second have passed");
}
setTimeoutPromised(3000).then(callback)