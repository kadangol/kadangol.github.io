/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}



function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log('max');
console.log("Expected output of max(5,4) is 5  " + myFunctionTest(5, max(5, 4)));
console.log("Expected output of max(0,4) is 4  " + myFunctionTest(4, max(0, 4)));


function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else if (c >= a && c >= b) {
        return c;
    } else {
        a;
    }
}

console.log('maxOfThree');
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

function isVowel(s) {
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
        return true;
    }
    return false;
}
console.log('isVowel');
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('z') is false  " + myFunctionTest(false, isVowel('z')));


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('sum');
console.log("Expected output of sum([1,2,3]) is 6  " + myFunctionTest(6, sum([1, 2, 3])));
console.log("Expected output of sum([1,2,9]) is 12  " + myFunctionTest(12, sum([1, 2, 9])));


function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
console.log('multiply');
console.log("Expected output of multiply([1,2,3]) is 6  " + myFunctionTest(6, multiply([1, 2, 3])));
console.log("Expected output of multiply([1,2,9]) is 18  " + myFunctionTest(18, multiply([1, 2, 9])));


function reverse(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log('reverse');
console.log("Expected output of reverse('cross-platform') is mroftalp-ssorc  " + myFunctionTest('mroftalp-ssorc', reverse('cross-platform')));
console.log("Expected output of reverse('Corporation.') is noitaroproC  " + myFunctionTest('.noitaroproC', reverse('Corporation.')));


function findLongestWord(arr) {
    let wordLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > wordLength) {
            wordLength = arr[i].length;
        }
    }
    return wordLength;
}
console.log('findLongestWord');
console.log("Expected output of findLongestWord(['cross','platform']) is 8  " + myFunctionTest(8, findLongestWord(['cross', 'platform'])));
console.log("Expected output of findLongestWord(['cross','bat','at']) is 5  " + myFunctionTest(5, findLongestWord(['cross', 'bat', 'at'])));


function filterLongWords(arr, i) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > i) {
            result.push(arr[index]);
        }
    }
    return result;
}
console.log('filterLongWords');
console.log("Expected output of filterLongWords(['cross','platform'], 8) is []  " + myFunctionTest(JSON.stringify([]), JSON.stringify(filterLongWords(['cross', 'platform'], 8))));
console.log("Expected output of filterLongWords(['cross','bat','at'],3) is  ['cross'] " + myFunctionTest(JSON.stringify(['cross']), JSON.stringify(filterLongWords(['cross', 'bat', 'at'], 3))));



const a = [1, 3, 5, 3, 3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
})
console.log('map');
console.log("Expected output of a.map is [10, 30, 50, 30, 30]  " + myFunctionTest(JSON.stringify([10, 30, 50, 30, 30]), JSON.stringify(b)));


const c = a.filter(function(elem, i, array) {
    return elem === 3;
});
console.log('filter');
console.log("Expected output of a.filter is [3,3,3]  " + myFunctionTest(JSON.stringify([3, 3, 3]), JSON.stringify(c)));

const d = a.reduce(function(prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log('reduce');
console.log("Expected output of a.reduce is 135  " + myFunctionTest(135, d));