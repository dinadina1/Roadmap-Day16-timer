// Set Timer Function

let callback = ()=>{
    setTimeout(()=>document.getElementById("header").innerText = 10,1000);
    setTimeout(()=>document.getElementById("header").innerText = 9,2000);
    setTimeout(()=>document.getElementById("header").innerText = 8,3000);
    setTimeout(()=>document.getElementById("header").innerText = 7,4000);
    setTimeout(()=>document.getElementById("header").innerText = 6,5000);
    setTimeout(()=>document.getElementById("header").innerText = 5,6000);
    setTimeout(()=>document.getElementById("header").innerText = 4,7000);
    setTimeout(()=>document.getElementById("header").innerText = 3,8000);
    setTimeout(()=>document.getElementById("header").innerText = 2,9000);
    setTimeout(()=>document.getElementById("header").innerText = 1,10000);
    setTimeout(()=>document.getElementById("header").innerText = "Happy Independance Day",11000);
}
callback();


