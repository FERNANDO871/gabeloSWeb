
const nav = document.querySelector('.boton_ojo');
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
                opacity:1;
                `
            }, 20);
}




nav.addEventListener('click',(e)=>{
    mostrarNavegacion();
})

document.addEventListener('keydown', e =>{
    // console.log(e.key)
    if(e.key== 'Escape' && !overlay.classList.contains('hidden')) mostrarNavegacion(false);
});

Escape.addEventListener('click', () =>{
    mostrarNavegacion(false)
});

ojo.addEventListener('click',e=>{
    if(!e.target.closest('.svg_div') || !e.target.id)return;
    let path = `http://127.0.0.1:5500/`;
    
    if(e.target.id=='nosotros')path += "acerca.html";
    if(e.target.id=='cursos')path += "cursos.html";
    if(e.target.id=='productos')path += "productos.html";
    if(e.target.id=='servicios')path += "servicios.html";
    if(e.target.id=='genealogia')path += "genealogia.html";
    if(e.target.id=='telegram')path += "telegram.html";
    if(e.target.id=='preguntas')path += "preguntas.html";
    if(e.target.id=='testimonios')path += "testimonios.html";
    if(e.target.id=='ciencias')path += "ciencias.html";
    if(e.target.id=='doctrinas')path += "doctrinas.html";
    // console.log(e.target.closest('.svg_div'))
    // console.log(e.target);

    window.location.href = path;
})

