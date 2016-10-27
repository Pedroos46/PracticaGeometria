function dibuixar() {
    var canvas = document.getElementById('tauler');
    document.getElementById('angle').addEventListener('change',dibuixar,false);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();

  ctx.moveTo(75,25);
  ctx.quadraticCurveTo(25,25,25,62.5);
  ctx.quadraticCurveTo(25,100,50,100);
  ctx.quadraticCurveTo(50,120,30,125);
  ctx.quadraticCurveTo(60,120,65,100);
  ctx.quadraticCurveTo(125,100,125,62.5);
  ctx.quadraticCurveTo(125,25,75,25);
  ctx.stroke();


  ctx.fill();
    }
}

window.addEventListener("load", dibuixar,false);
