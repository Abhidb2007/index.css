function timeout(){
console.log("hi ");
}
console.log("click  button");
setTimeout(timeout,10);
console.log("welcome  loupe");
let c=0;
for(let i=0;i<1000000;i++){
    c=c+1;

}
console.log("Expensive operation done");