function dibuixar() {
    var canvas = document.getElementById('tauler');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.src = 'images.jpg';

      img.onload = function(){
        ctx.drawImage(img,10, 10, 300, 300)
      }
    }
}

window.addEventListener("load", dibuixar,false);
