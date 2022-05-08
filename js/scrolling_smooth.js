
const botones = document.querySelectorAll('.btn_smooth_scroll');
const secciones = document.querySelectorAll('.seccion_smooth_scroll');


secciones[0].scrollIntoView({behavior: 'smooth'});

function navegar(boton){
    if(boton == secciones.length)boton=0;
    secciones[boton].scrollIntoView({behavior: 'smooth'})
}

botones.forEach( function(boton){
boton.addEventListener('click', function(e){
    navegar(parseInt(e.target.id.slice(-1)))
})
})


