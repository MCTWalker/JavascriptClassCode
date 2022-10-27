function changeText() {
    let pEl = document.getElementById("paragraph1");
    let inputEl = document.getElementById("userText");

    let number = Number(inputEl.value);

    let randomNumber = Math.floor(Math.random() * 10);//generates a random number between 0-10

    if (number % 2 === 0) {
        pEl.innerText = "Yes"
    } else {
        pEl.innerText = "No"
    }

    let pEl2 = document.getElementById("paragraph2");
    let pEl3 = document.getElementById("paragraph3");

    pEl2.innerText = "Random Number is: " + randomNumber;

    if (randomNumber % 2 === 0) {
        pEl3.innerText = "Yes"
    } else {
        pEl3.innerText = "No"
    }
}