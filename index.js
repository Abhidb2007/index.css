function isAnagram(String1, String2) {
    const sortedString1 = String1.toLowerCase().split("").sort().join("");
    const sortedString2 = String2.toLowerCase().split("").sort().join("");
 
}
if(sortedString1 === sortedString2){
    return true;
}else{
    return false;
}


