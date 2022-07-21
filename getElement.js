console.log("I worked!!!");

function changeHeaderText(string1, string2) {
    let header = document.getElementById("header1");
    header.innerText = string1 + string2;
}

function changeHeaderColor() {
    let header = document.getElementById("header1");
    header.style.color = "red";
}
//The line below gets a button
let button = document.getElementById("btn1");
button.addEventListener("click", changeHeaderColor);
