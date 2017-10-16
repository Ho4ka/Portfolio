


function timeOutForDisolayHeader() {
   const timeoutID = window.setTimeout(displayHeader, 1000);
}
function displayHeader() {
    let pause = document.getElementById('header').style.opacity = "1";
}

timeOutForDisolayHeader();




