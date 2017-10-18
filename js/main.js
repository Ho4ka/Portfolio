

// window.onscroll = function() {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//         console.log(scrolled);
//      if(scrolled === 300) {
//          document.getElementById('article2').style.opacity = '1';
//      }
     
//   }
function timeOutForDisolayHeader() {
   const timeoutID = window.setTimeout(displayHeader, 1000);
}
function displayHeader() {
    let pause = document.getElementById('header').style.opacity = "1";
}

timeOutForDisolayHeader();




