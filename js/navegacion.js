
const nav = document.querySelector('.intro_index');
const biblia = document.querySelector('.biblia');
const overlay = document.querySelector('.overlay');
const ojo = document.querySelector('.ojo_nav');
const Escape = document.querySelector('.icon_escape');
const secciones = document.querySelectorAll('.img-fondo');
const navegacion = document.querySelector('.intro_index');
// console.log(navegacion)
// console.log(biblia)
// console.log(ojo)
// console.log(overlay)

const mostrarNavegacion = function(visible=true) {
        // console.log(getComputedStyle(nav).opacity)

        overlay.classList.toggle('hidden');
        ojo.classList.toggle('hidden');
            setTimeout(function(){
                ojo.style= `
                --tamano_parpado:${visible ? '145%':'0'};
                transform: translate(-50%,-50%) rotate(45deg) ${visible ? 'scale(1)':'scale(0.01)'};
                `
            }, 20);
        // console.log(ojo.style)
}

const observando = function(entradas, obser){
    entradas.forEach(entrada => {
        // console.log(entrada)
        navegacion.style = "opacity:0;";
        if(!entrada.isIntersecting)return;
        navegacion.style = "opacity:1;";
    });
};

const opciones_obervacion = {
    root:null,
    threshold: [0.3],
};


nav.addEventListener('click',(e)=>{
    // console.log(e.target)
    if(getComputedStyle(nav).opacity==0)return;
    e.target.querySelector('.foto_papa') || e.target.querySelector('.biblia') ||
    
    mostrarNavegacion();
})

document.addEventListener('keydown', e =>{
    // console.log(e.key)
    e.key= 'Escape' && mostrarNavegacion(false)
});

Escape.addEventListener('click', () =>{
    mostrarNavegacion(false)
});

navegacion.addEventListener('mouseover',()=>{
    navegacion.style = "opacity:1;";
    
})
navegacion.addEventListener('mouseout',()=>{
    navegacion.style = "opacity:0;";
})

const observador = new IntersectionObserver(observando,opciones_obervacion);
secciones.forEach(seccion=>{
    // console.log(seccion);
    observador.observe(seccion);
})