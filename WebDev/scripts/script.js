const myImg = document.querySelector("img");

myImg.addEventListener("click",
    function(){
    const mySrc = myImg.getAttribute("src");
    if(mySrc == "images/firefox_png.jpg"){
        myImg.setAttribute("src", "images/netflix.jpg");
    }
    else{
        myImg.setAttribute("src", "images/firefox_png.jpg");
    }
    });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", function(){
    setUserName();
})

