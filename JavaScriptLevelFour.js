// //Class Task
const favtMovie = "3 Idiots";

let guess = prompt("Enter my Favorite movie");

while(guess != favtMovie){
    guess = prompt("Wrong, Please try again...");
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
}
if(guess == favtMovie){
    console.log("Congrats")
}

// //Class Task
let todo=[];

let req = prompt("Enter your request");

while(true){
    if (req == 'quit') {
        console.log("You quit");
        break;
    }
    else if(req == 'list'){
        console.log("-----------");
        for(let i = 0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }
    else if (req=='add'){
        let task = prompt("Any task you want to enter");
        todo.push(task);
        console.log("Task added");
    }
    else if(req == 'delete'){
        let idx = prompt("Which index you want to delete");
        todo.slice(idx,1);
    }
    else{
        console.log("Wrong input");
    }

    req = prompt("Enter your new request");
}

//Question 1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0; i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
//Question 2
let numb = 287152;
let count = 0;
let cop = numb;
while (cop > 0) {
    count++;
    cop = Math.floor(cop / 10);
}
console.log(count);

//Question 3
let number = 287152;
let sum = 0;
let copy = number;
while (copy > 0) {
    let digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(sum);

//Question 4
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);

//Question 5
let arr2 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i < arr2.length; i++) { 
    if (largest < arr2[i]) {
        largest = arr2[i];
    }
}
console.log(largest);
