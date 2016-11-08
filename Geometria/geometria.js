//var canvas = document.getElementById('tauler');
//var ctx ;

function dibuixar() {
    var canvas = document.getElementById('tauler');


    if (canvas.getContext) {
      var   ctx = canvas.getContext('2d');
      ctx.fillStyle="black";
      ctx.strokeStyle="yellow";
        pintarCuadrat(ctx);
        pintarTriangle(ctx);
        pintarCercle(ctx);
        pintarRectangle(ctx);
        pintarTrapezi(ctx);
        pintarRombe(ctx);
        pintarPentagon(ctx);
        pintarHexagon(ctx);
        pintarHeptagon(ctx);
        //pintarTest(ctx);

        }

}


function polygon(ctx, x, y, radius, sides, startAngle, anticlockwise) {
if (sides < 3) return;
var a = (Math.PI * 2)/sides;
a = anticlockwise?-a:a;
ctx.save();
ctx.translate(x,y);
ctx.rotate(startAngle);
ctx.moveTo(radius,0);
for (var i = 1; i < sides; i++) {
  ctx.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
}
ctx.closePath();
ctx.restore();
}


function pintarCuadrat(ctx){

  ctx.lineWidth="5";
  ctx.rect(100,100,50,50);
  ctx.fill();
}

function pintarTriangle(ctx){

    ctx.save();
    ctx.translate(50, 200);

    ctx.moveTo(50, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fill();

    ctx.restore();

}




function  pintarCercle(ctx){

    ctx.save();
    ctx.translate(50, 400);

    ctx.moveTo(75+50,75);
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.stroke();

    ctx.restore();

}


 function pintarRectangle(ctx){

    ctx.save();
    ctx.translate(5, 500);

    ctx.lineWidth="5";
    ctx.rect(50,80,150,80);
    ctx.stroke();
    ctx.fill();

    ctx.restore();

}


 function pintarTrapezi(ctx){

    ctx.save();
    ctx.translate(100, 700);

    ctx.moveTo(25,25);
    ctx.lineTo(25,25);
    ctx.lineTo(75, 25);
    ctx.lineTo(150, 100);
    ctx.lineTo(-50,100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.restore();

 }


 function pintarRombe(ctx){

   ctx.save();
   ctx.translate(0, 800);

   ctx.moveTo(125,50);
   ctx.lineTo(125,50);
   ctx.lineTo(150, 100);
   ctx.lineTo(125, 150);
   ctx.lineTo(100, 100);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   ctx.restore();

 }


  function pintarPentagon(ctx){

    ctx.save();
    ctx.translate(60, 1000);

    ctx.beginPath();
    polygon(ctx, 50,50,50,5,-Math.PI/2);
    ctx.stroke();

    ctx.restore();

  }


function  pintarHexagon(ctx){

    ctx.save();
    ctx.translate(60, 1150);

    ctx.beginPath();
    polygon(ctx, 50,50,50,6,-Math.PI/2);
    ctx.stroke();

    ctx.restore();

}


  function pintarHeptagon(ctx){

    ctx.save();
    ctx.translate(60, 1300);

    ctx.beginPath();
    polygon(ctx, 50,50,50,7,-Math.PI/2);
    ctx.stroke();

    ctx.restore();


  }

  function pintarTest(ctx){

    ctx.save();
    ctx.translate(0,0);

    ctx.moveTo(0,0);
    ctx.lineWidth="5";
    ctx.rect(0,0,50,50);
    ctx.fill();

    ctx.restore();

  }





function clear(){

  var canvas = document.getElementById('tauler');
//alert("hola");

  if (canvas.getContext) {
var   ctx = canvas.getContext('2d');
ctx.clearRect(0,0,3000,1500);

}

}

function text(){

  var canvas = document.getElementById('tauler');


  if (canvas.getContext) {
    var   ctx = canvas.getContext('2d');

switch(this.id){
          case "Quadrat": textCuadrat(ctx); break;
          case "Triangle": textTriangle(ctx);break;
         case "Cercle": textCercle(ctx);break;
          case "Rectangle": textRectangle(ctx);break;
          case "Trapezi": textTrapezi(ctx);break;
          case "Rombe": textRombe(ctx);break;
          case "Pentagon": textPentagon(ctx);break;
          case "Hexagon": textHexagon(ctx);break;
          case "Heptagon": textHeptagon(ctx);break;
          default: break;
}
}
}

function textCuadrat(ctx){
ctx.font = "12px Arial";
ctx.fillText("Quadrat: Per = 4 * LCostado ;Area = LCostado^2",180,125);

}

function textTriangle(ctx){
ctx.font = "12px Arial";
ctx.fillText("Triangle Per = C + C + C; Area = (Base * Costat) / 2",180,300);

}

function textCercle(ctx){
ctx.font = "12px Arial";
ctx.fillText("Circulo: Per = 2* Pi * Radi; Area = Pi * Radi^2",200,480);

}
function textRectangle(ctx){
ctx.font = "12px Arial";
ctx.fillText("Rectangle: Per = 2*base + 2*Altura; Area = Base * Altura",220,620);

}
function textTrapezi(ctx){
ctx.font = "12px Arial";
ctx.fillText("Trapezi: Per = Base + BaseSuperior + 2 * Costat; Area = ((Base + BaseSuperior) * Altura) / 2",250,765);

}
function textRombe(ctx){
ctx.font = "12px Arial";
ctx.fillText("Rombe: Per = 4 * Costat; Area = Base * AlturaInterior",180,900);

}
function textPentagon(ctx){
ctx.font = "12px Arial";
ctx.fillText("Pentagon: Per = 5 * Costat; Area = (Per * Apotema) / 2",180,1050);

}
function textHexagon(ctx){
ctx.font = "12px Arial";
ctx.fillText("Hexagon: Per = 6 * Costat; Area = (Per * Apotema) /2",180,1200);

}
function textHeptagon(ctx){
ctx.font = "12px Arial";
ctx.fillText("Heptagon: Per = 7 * Costat; Area = (7 * LCostat * Apotema)/2",180,1350);

}

function ferNegatiu(){
  // dibuixar(); -- Com està, el botó fa el negatiu del canvas.
  // Si descomentem dibuixar(), el botó pinta automàticament el canvas ja en negatiu
  var canvas = document.getElementById('tauler');
  if(canvas.getContext){
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0,0,canvas.width,canvas.height);
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
      pixels[i] = 255 - pixels[i]; // red
      pixels[i+1] = 255 - pixels[i+1]; // green
      pixels[i+2] = 255 - pixels[i+2]; // blue
    }
    context.putImageData(imageData,0,0);
  }
}



function ferBN(){
  var canvas = document.getElementById('tauler');
  if(canvas.getContext){
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0,0,canvas.width,canvas.height);
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        var bn = pixels[i] * 0.3 + pixels[i+1] * 0.59 + pixels[i+2] * 0.11;
        //Luminace ALgorith. És un prorrateig per determinar si hem de fer un pixel blanc o negre, no hi ha manera obvia de fer-ho,
        //ja que per blanc necessitem els 3 components RGB=0 i pel negre els 3 RGB= 255.
        //Per tant hem de decidir si fer un pixel blanc o negre basat en el seu color inicial:
        //Aquest prorrateig té en compte la percepció de la intensitat dels colors de l'ull humà.
        if (bn > 127){
          pixels[i]=255;
          pixels[i+1]=255;
          pixels[i+2]=255;
        }
        else{
          pixels[i]=0;
          pixels[i+1]=0;
          pixels[i+2]=0;
        }
    }
    /*
    for (var i = 0; i < pixels.length; i += 4) {
    	if(pixels[i]> 127){pixels[i] = 255;}else if((pixels[i]< 127)||(pixels[i]==127)){pixels[i] = 0;}
    	if(pixels[i+1]> 127){pixels[i+1] = 255;}else if((pixels[i+1]< 127)||(pixels[i+1]==127)){pixels[i+1] = 0;}
    	if(pixels[i+2]> 127){pixels[i+2] = 255;}else if((pixels[i+2]< 127)||(pixels[i+2]==127)){pixels[i+2] = 0;}

    } */
    context.putImageData(imageData,0,0);
  }
}


function downloadCanvas() {
  var canvas = document.getElementById('tauler');
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


window.location.href=image;
}


document.getElementById("Guardar").addEventListener("click", function() {
    downloadCanvas();
}, false);
document.getElementById("BN").addEventListener("click", ferBN);
document.getElementById("N").addEventListener("click", ferNegatiu);
document.getElementById("2D").addEventListener("click", dibuixar);

document.getElementById("Quadrat").addEventListener("click", text);
document.getElementById("Triangle").addEventListener("click", text);
document.getElementById("Cercle").addEventListener("click", text);
document.getElementById("Rectangle").addEventListener("click", text);
document.getElementById("Trapezi").addEventListener("click", text);
document.getElementById("Rombe").addEventListener("click", text);
document.getElementById("Pentagon").addEventListener("click", text);
document.getElementById("Hexagon").addEventListener("click", text);
document.getElementById("Heptagon").addEventListener("click", text);
document.getElementById("Cub").addEventListener("click", text);
document.getElementById("Con").addEventListener("click", text);
document.getElementById("Cilindre").addEventListener("click", text);
document.getElementById("Esfera").addEventListener("click", text);
//window.addEventListener("load", dibuixar,false);
