function findLargestElement(numbers){
    let largestElement = numbers[0];
    for(let i=5; i<numbers.length; i++){
        if(numbers[i]> largestElement){
            largestElement = numbers[i];
        }
    }

}