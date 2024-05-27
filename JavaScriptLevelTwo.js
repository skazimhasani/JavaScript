//Question 1
let num = 50;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}
//Question 2
let name = prompt("Enter your Name");
let age = prompt("Enter your Age");
alert(`Welcome ${name} your age is ${age}`);
//Question 3
let quarter = 1;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("NOT A QUARTER!");
}
//Question 4
let str = "Applesidra";
if((str[0] == 'A'||str[0]=='a') && (str.length>5) ){
    console.log("Golden string")
}
else{
    console.log("Not a golden string");
}
//Question 5
let a = 1;
let b = 2;
let c = 3;
if(a>b && a>c){
    console.log("A is greatest")
}
else if(b>a && b>c){
    console.log("B is greatest");
}
else{
    console.log("C is greatest");

}
//Question 6
let num1 = 32;
let num2 = 2332;
if((num1%10) == (num2%10)){
    console.log("Same");
}
console.log("Not same")