//Question 1
let arr = [7,9,0,-2];
let n = 3;

let ans = arr.slice(0,n)
console.log(ans)

//Question 2
let arr2 = [7,9,0,-2];
let n2 = 3;

let ans2 = arr2.slice(arr2.length-n2);
console.log(ans2)

//Question 3
let str = prompt("Enter a String");
if(str.length==0){
    console.log("String is empty")
}else{
    console.log("String isn't empty")
}
//Question 4
let str2 = "ApnaCollege";
let idx = 3;
if(str2[idx] == str2[idx].toLowerCase()){
    console.log("character is lowercase")
}else{
    console.log("character isn't lowercase")
}
//Question 5
let str3 = prompt("please enter a string");
console.log(`original string = ${str3}`);
console.log(`string without spaces = ${str3.trim()}`);
//Question 6
let arr3 = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (arr3.indexOf(item) != -1) {
  console.log("element exists in array");
} else {
  console.log("element doesn't exist in array");
}
