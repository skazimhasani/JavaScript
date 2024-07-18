//Random Facts

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url = 'https://catfact.ninja/fact';
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error : ",e)
        return "No result found"
    }
}

//Random Images

let url2 = 'https://dog.ceo/api/breeds/image/random';

let btn2 = document.querySelector("button");
btn2.addEventListener("click",async ()=>{
    let link = await getImage();
    let img = document.querySelector("#result2");
    img.setAttribute("src",link);
    
})

async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log("Error : ", e)
        return "No result found"
    }
}

//Uni search

let url3 = "http://universities.hipolabs.com/search?name="
let btn3 = document.querySelector("button")

btn3.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let uniArr = await getUni(country);
    allUni(uniArr);
})

function allUni(uniArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(uni of uniArr){
        let li = document.createElement("li");
        li.innerText = uni.name;
        list.appendChild(li);
    }
}

async function getUni(country){
    try{
        let res = await axios.get(url3 + country);
        return res.data;
    }catch(e){
        console.log("error",e);
        return [];
    }

}