
const botones = document.querySelectorAll('.scrolling_smoth');
const seccion1 = document.getElementById('seccion1')
const seccion2 = document.getElementById('seccion2');
const seccion3 = document.getElementById('seccion3');
const seccion4 = document.getElementById('seccion4');
seccion1.scrollIntoView({behavior: 'smooth'});
try{
    botones.forEach( function(boton){
    boton.addEventListener('click', function(e){
        e.target.id==='leer_mas1' && seccion2.scrollIntoView({behavior: 'smooth'});
        e.target.id==='leer_mas2' && seccion3.scrollIntoView({behavior: 'smooth'});
        e.target.id==='leer_mas3' && seccion4.scrollIntoView({behavior: 'smooth'});
        e.target.id==='inicio' && seccion1.scrollIntoView({behavior: 'smooth'});
    })
})
}catch(error){console.log(error)}

