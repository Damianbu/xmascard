const name = getNameFromURL() || "To You";

const nameEle = document.getElementById("name");

createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");

lightUpName(0);

function createNameSpans(name){
    let nameArray = name.split("");
    let htmlString ="";
    nameArray.forEach((letter, index) => {
        htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`; 
    })
    nameEle.innerHTML = htmlString; 
}

function lightUpName(n){
    let length = letterEles.length;

    for(let i=0; i < length; i++){
        let ele = letterEles[i];
        ele.className = (n+i) % 2 == 0 ? "green" : "red";
        //ternary syntax: bedingung ? true : false
    }

    setTimeout(function(){
        lightUpName(n+1);
    }, 500);
}

function getNameFromURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlName = urlParams.get("name");
    return urlName;
}