//Question 1
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);

//Question 2
let str = "abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
getUnique(str);

//Question 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);

//Question 4
let str2 = "apnacollege";
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2.charAt(i) == "a" || str2.charAt(i) == "e" || str2.charAt(i) == "i" || str2.charAt(i) == "o" || str2.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}

//Question 5
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

