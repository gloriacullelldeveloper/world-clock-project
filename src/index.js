// London

function updateTime() {


    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");


    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");


// New York

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");


newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");

// Berlin


let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");
let berlinTime = moment().tz("Europe/Berlin");


berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss [<small>]A[</small>]");

// Italy


let italyElement = document.querySelector("#italy");
let italyDateElement = italyElement.querySelector(".date");
let italyTimeElement = italyElement.querySelector(".time");
let italyTime = moment().tz("Europe/Italy");


italyDateElement.innerHTML = italyTime.format("MMMM Do YYYY");
italyTimeElement.innerHTML = italyTime.format("h:mm:ss [<small>]A[</small>]");


}

updateTime();
setInterval(updateTime, 1000);