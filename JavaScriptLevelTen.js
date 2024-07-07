let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = changeColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color update");
});

function changeColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
} 

let button = document.querySelector(".second");

button.addEventListener("click",function(){
    this.style.backgroundColor = "green"
})

let h2 = document.querySelector("h2");
let inp = document.querySelector("input");

inp.addEventListener("input",function(){
    h2.innerText = this.value;
})