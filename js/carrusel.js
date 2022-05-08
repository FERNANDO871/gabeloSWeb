const slicers = document.querySelectorAll('.carrusel_slicer');
const flechas = document.querySelectorAll('.flechas');
let incremento=0;

console.log(flechas[1]);
flechas[0].addEventListener('click',izquierda)
flechas[1].addEventListener('click',derecha)


function derecha(){
    incremento--;
    if(incremento<-3)incremento=0;
    acomodar();
}

function izquierda(){
    incremento++;
    if(incremento>0)incremento=-3;
    acomodar();
}


function acomodar(){
    slicers.forEach(function(s,i) {
        s.style.transform = `translateX(${(i+incremento)*100}%)`
        console.log(s,i)
    })
}
acomodar()