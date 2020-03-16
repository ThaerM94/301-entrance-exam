'use strict';



var maxNum = [7,6,9,2];
var minNum = 5;
var numbers = 0;

function greaterthan (maxNum,minNum) {
    for (var i=0 ; i<maxNum.length; i++) {
        if (maxNum[i]>minNum)
        numbers = numbers+1;
    }
       return(numbers); 
}
console.log(greaterthan(maxNum,minNum));