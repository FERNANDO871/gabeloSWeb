
const nav = document.querySelector('.boton_ojo');
const biblia = document.querySelector('.biblia');
const overlay = document.querySelector('.overlay');
const ojo = document.querySelector('.ojo_nav');
const Escape = document.querySelector('.icon_escape');
console.log(biblia)
console.log(ojo)
console.log(overlay)

const mostrarNavegacion = function(visible=true) {
        overlay.classList.toggle('hidden');
        ojo.classList.toggle('hidden');
            setTimeout(function(){
                ojo.style= `
                --tamano_parpado:${visible ? '145%':'0'};
                transform: translate(-50%,-50%) rotate(45deg) ${visible ? 'scale(1)':'scale(0.01)'};
                opacity:1;
                `
            }, 20);
}




nav.addEventListener('click',(e)=>{
    mostrarNavegacion();
})

document.addEventListener('keydown', e =>{
    // console.log(e.key)
    e.key= 'Escape' && mostrarNavegacion(false)
});

Escape.addEventListener('click', () =>{
    mostrarNavegacion(false)
});


