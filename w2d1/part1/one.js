function sum(arr) {
    let sum = 0;
    sum = arr.reduce((totalSum, nextVal) => totalSum + nextVal, 0);
    return sum;
}


function multiply(arr) {
    let product = 1;
    product = arr.reduce((totalProduct, nextVal) => totalProduct * nextVal, 1);
    return product;
}

function reverse(str) {
    let reverse = '';
    reverse = str.split("").map((_, ind, arr) => arr[arr.length - 1 - ind]).join("");
    return reverse;
}


function findLongestWord(arr) {

    var longestWord = arr.reduce(function(longWord, currWord) {
        return currWord.length > longWord.length ? currWord : longWord;
    }, "");
    return longestWord.length;
}

function filterLongWords(arr, i) {
    let result = [];
    result = arr.find(x => x.length > i);
    return result;
}