// //Async Keyword

async function greet(){
    return "hello";
}

// //Await Keyword

let h3 = document.querySelector("h3");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num > 3){
            reject("Rejected");
        }
        setTimeout(()=>{
        h3.style.color = color;
        resolve();
        },delay)
    })
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("orange",1000);
        await changeColor("blue",1000);
    }
    catch(err){
        console.log("Error Caught");
        console.log(err)
    }
    let a = 5
    console.log(a);
    console.log(a+3);
}

demo();

//JSON

let jsonRes = '{"fact":"The Amur leopard is one of the most endangered animals in the world.","length":68}';

let validRes = JSON.parse(jsonRes);

console.log(validRes.length);

let obj = {
    username : "kazim",
    age : 25,
}

let jsonData = JSON.stringify(obj)
console.log(jsonData)

//Fetch

let url = 'https://catfact.ninja/fact';

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact)
})
.catch((err)=>{
    console.log(err)
})


let url2 = 'https://catfact.ninja/fact';

async function getFact(){
    try{
        let res =await fetch(url2);
        let data = await res.json();
        console.log(data);

        let res2 =await fetch(url2);
        let data2 = await res2.json();
        console.log(data2);
    }
    catch(err){
        console.log(err);
    }
    console.log("Bye")
}
