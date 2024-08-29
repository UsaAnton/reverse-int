module.exports = function reverse (n) {
    if(n < 0){ 
        n = 0 - n; 
    }
    let str = String(n); 
    let arr = str.split(""); 
    let reverseArr = []; 
    let num = arr.length - 1; 
    for(let i = 0; i < arr.length; i++){ 
        reverseArr[i] = arr[num--]; 
    }
    let reverseStr = reverseArr.join(""); 
    let reverseNumber = Number(reverseStr); 
    return reverseNumber; 
}
