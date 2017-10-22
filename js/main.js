

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




let box = document.getElementsByClassName('show');

    window.addEventListener('scroll', function() {
        for(var i = 0 ; i<box.length; i++ ){
      if (document.body.scrollTop > 300) {
        box[i].style.opacity = "1";
      }
    }
    });