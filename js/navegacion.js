
const nav = document.querySelector('.intro_index');
const biblia = document.querySelector('.biblia');
const overlay = document.querySelector('.overlay');
const ojo = document.querySelector('.ojo_nav');
const Escape = document.querySelector('.icon_escape');
// console.log(biblia)
// console.log(ojo)
// console.log(overlay)



const mostrarNavegacion = function(visible=true) {
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

nav.addEventListener('click',(e)=>{
    console.log(e.target)
    e.target.querySelector('.foto_papa') || e.target.querySelector('.biblia') ||
    mostrarNavegacion();
})

document.addEventListener('keydown', e =>{
    console.log(e.key)
    e.key= 'Escape' && mostrarNavegacion(false)
})

Escape.addEventListener('click', () =>{
    mostrarNavegacion(false)
})