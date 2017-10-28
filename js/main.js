


function show(){
window.addEventListener('scroll', function(e){ 
    let test = window.scrollY;
    
        if(test >200||test === 300) {
       
          let getBlocks = document.getElementsByClassName('anime');
        
        for (var i = 0; i< getBlocks.length; i++){
         (function(i) {
            setTimeout(function(){ 
                getBlocks[i].style.animationName="show";
            }, 100 + (300 * i));
        })(i);
    }
         }
 })
}

show();


function timeOutForDisolayHeader() {
   const timeoutID = window.setTimeout(displayHeader, 1000);
}
function displayHeader() {
    let pause = document.getElementById('header').style.opacity = "1";
}

timeOutForDisolayHeader();



