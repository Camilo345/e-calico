class pregunta {
    constructor(txtbt1,txtbt2,MinBoton,tiempoTran,tiempoRegreso,tiempoB1,tiempoB2,btCorrecto) {
        this.txt = txtbt1;
        this.txt2=txtbt2
        this.MinBoton = MinBoton;
        this.tiempoTran= tiempoTran;
        this.tiempoRegre=tiempoRegreso;
        this.bt1 = tiempoB1;
        this.bt2 = tiempoB2;
        this.correcto=btCorrecto;
    }
}

$('#myModal').on('hidden.bs.modal', function (e) {
    video.play();
   })
 
   $('#modalCreditos').on('hidden.bs.modal', function (e) {
     video.play();
    })


var CT;



var iniciar=false;
var video = document.querySelector("video");
var modalIntro = document.getElementById("modalIntroId");


var bt1 =  document.getElementById("bt1");
var bt2 =  document.getElementById("bt2");

var btPlay =  document.getElementById("btPlay");

var medal1 = document.getElementById("medalV1");
var medal2 = document.getElementById("medalV2");
var medal3 = document.getElementById("medalV3");
var medal4 = document.getElementById("medalV4");

var modal = document.getElementById("modal");

misionEconomica = document.getElementById('btnIE');
misionAmbiental = document.getElementById('btnIA');
misionSocial = document.getElementById('btnIS');
misionCultural = document.getElementById('btnIC');




bt1.style.display = "none";
bt2.style.display = "none";


//constructor(txtbt1,txtbt2,MinBoton,tiempoTran,tiempoRegreso,tiempoB1,tiempoB2,btCorrecto) {
const P1 = new pregunta('Comprar Productos desechables','Comprar Productos reutilizables',49,10.5,47.5,59,69.8,2);
const P2 = new pregunta('Depositar residuo en la caneca','Tirar residuo al piso',96,11,93.5,118,107,1);
const P3 = new pregunta('No auxiliarlos','Auxiliarlos',152,10,149,162,172.4,2);
const P4 = new pregunta('Tomar todas las reliquias','Tomar la vasija transformadora',202,15,197,229,212,1);
//            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var preguntas =[P1,P2,P3,P4];
var medallas=[medal1,medal2,medal3,medal4];
var VA= 0;
var esCorrecto=true;

var myWindow = window


bt1.addEventListener('click',cambiarVideo1,true);
bt2.addEventListener('click',cambiarVideo2,true);
btPlay.addEventListener('click',empezar,true);


misionEconomica.addEventListener("click", function (event) {
    event.preventDefault();
    modificarBotones(preguntas[0].tiempoRegre);
    $('#myModal').modal('hide')
}, false);

misionAmbiental.addEventListener("click", function (event) {
    event.preventDefault();
    modificarBotones(preguntas[1].tiempoRegre);
    $('#myModal').modal('hide')
}, false);

misionSocial.addEventListener("click", function (event) {
    event.preventDefault();
    modificarBotones(preguntas[2].tiempoRegre);
    $('#myModal').modal('hide')
}, false);

misionCultural.addEventListener("click", function (event) {
    event.preventDefault();
    modificarBotones(preguntas[3].tiempoRegre);
    $('#myModal').modal('hide')
}, false);

window.onblur = function(){
    video.pause();
};

window.onfocus = function(){
video.play();
};


 

video.ontimeupdate= function(){    
    bt1.innerText = preguntas[VA].txt;
    bt2.innerText = preguntas[VA].txt2;

    CT=video.currentTime;

    if(CT<90){
        VA=0;
    }

    if(CT>90 && CT  <145){
        VA=1;
    }

    if(CT>145 && CT  <195){
        VA=2;
    }

    if(CT>195){
        VA=3;
    }
    if(CT>=preguntas[VA].MinBoton && (CT<=preguntas[VA].MinBoton+10)){
        bt1.style.display = "block";
        bt2.style.display = "block";

    }else{
        bt1.style.display = "none";
        bt2.style.display = "none";
    }
};

function cambiarEsCorrecto() {
    console.log(preguntas[VA].tiempoRegre);
    video.currentTime = preguntas[VA].tiempoRegre;
   }

function cambiarVideo1 (){
    var correcto=false;
    if(preguntas[VA].correcto===1){
        mostrarMedalla(VA);
        correcto=true;
        
    }else{
        esCorrecto=false;   
        console.log(preguntas[VA].tiempoTran);
        setTimeout(cambiarEsCorrecto,preguntas[VA].tiempoTran*1000);
    }
    modificarBotones(preguntas[VA].bt1,correcto);
}
function cambiarVideo2 (){
    var correcto=false;
    if(preguntas[VA].correcto===2){
       mostrarMedalla(VA);
       correcto=true;
       
    }else{
        esCorrecto=false;   
      
        setTimeout(cambiarEsCorrecto,preguntas[VA].tiempoTran*1000);
    }
    modificarBotones(preguntas[VA].bt2,correcto);
}

function modificarBotones(tiempoNuevo,cor){
    CT=0;
    bt1.style.display = "none";
    bt2.style.display = "none";
    video.pause();
    video.currentTime = tiempoNuevo;
    video.play();

 
}

function mostrarMedalla(indMedal) {
   medallas[indMedal].style.opacity=1;
  

  }

 

function empezar (){
    modalIntro.style.display="none";
    video.play();
}


