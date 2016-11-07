function dibuixar() {
    var canvas = document.getElementById('tauler');
    var costats = 99;
    var D = 2;
    var p= 1;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.save();

        if(D == 2){

        pintarCuadrat(ctx);
        pintarTriangle(ctx);
        pintarCercle(ctx);
        pintarRectangle(ctx);
        pintarTrapezi(ctx);
        pintarRombe(ctx);
        pintarPentagon(ctx);
        pintarHexagon(ctx);
        pintarHeptagon(ctx);
        pintarTest(ctx);


        }



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
  ctx.strokeStyle="green";
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
    ctx.strokeStyle = '#666666';
    ctx.stroke();
    ctx.fillStyle = "#FFCC00";
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
    ctx.strokeStyle="green";
    ctx.rect(50,80,150,80);
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
    ctx.strokeStyle="green";
    ctx.rect(0,0,50,50);
    ctx.fill();

    ctx.restore();

  }




window.addEventListener("load", dibuixar,false);
