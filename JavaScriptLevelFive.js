//Class task
const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max )+1;

let guess = prompt("Guess a number");

while(true){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }
    if(guess == random){
        console.log("Right! guess number was",random);
        break;
    }
    else if(guess < random){
        guess = prompt("Hint : Your guess is too small. Enter a large number");
    }
    else{
        guess = prompt("Hint : Your guess is too large. Enter a small number");

    }
}

//Question 1
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//Question 2
const car = {
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "white",
  };
  console.log(car.name);  
  
//Question 3
const Person = {
    name: "Jane Doe",
    age: 21,
    city: "New Jersey",
  };
  Person.city = "New York";
  Person.country = "United States";
  console.log(Person);
  
