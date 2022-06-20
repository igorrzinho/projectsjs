var timer;
var obj = document.getElementById("semaforo");
var muda = 1;
function automatico() {
  change(muda);
  if (muda == 1) {
    change(muda);
  }
  if (muda < 4) {
    muda++;
  } else {
    muda = 1;
  }
  change(muda);
}
function off() {
  clearTimeout(timer);
  obj.src = "./img/off.png";
}
function change(c) {
  clearInterval(timer);
  if (c == 1) {
    //se "c" for igual a 1
    obj.src = "./img/green.png";
    muda = 1;
  } else if (c == 2) {
    //se "c" for igual a 2
    obj.src = "./img/orange.png";
    muda = 2;
  } else if (c == 3) {
    //se "c" for igual a 3
    obj.src = "./img/red.png";
    muda = 3;
  }
}
