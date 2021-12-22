var video = document.querySelector("video");
botonModal1 = document.getElementById('btMenu1');
botonModal2 = document.getElementById('btMenu2');




botonModal1.addEventListener("click", function (event) {
    event.preventDefault();
    video.pause();
}, false);

botonModal2.addEventListener("click", function (event) {
    event.preventDefault();
    video.pause();
   
}, false);