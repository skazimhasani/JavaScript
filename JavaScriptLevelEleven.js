//Callback Hell --- Callback Nesting

h3 = document.querySelector("h3");

function changeColor(color,delay,nextChangeColor){
    setTimeout(()=>{
        h3.style.color = color;
        if(nextChangeColor) nextChangeColor();
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("blue",1000,()=>{
                changeColor("orange",1000)
            })
        })
    })
})

//Promises

function saveToDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4){
            resolve("save");
        }else{
            reject("not saved");
        }
    })
}

saveToDB("Apna college")
.then((result)=>{
    console.log("Saved 1")
    console.log("result" ,result)
    return saveToDB("Hello World")
})
.then((result)=>{
    console.log("Saved 2")
    console.log("result" ,result)
    return saveToDB("Hi")
})
.then((result)=>{
    console.log("Saved 3")
    console.log("result" ,result)
})
.catch((error)=>{
    console.log("Rejected")
    console.log("error" ,error)
})