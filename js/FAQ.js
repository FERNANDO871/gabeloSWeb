
const categorias = document.querySelector('.categorias');
const preguntas = document.querySelector('.preguntas');
let categoriaElegida;
// console.log(categorias)
// console.log(preguntas)



async  function imprimirCategorias(){
    const peticion = await fetch('js/categorias.json');
    const data = await peticion.json();
    data.forEach(categoria => {
        categorias.insertAdjacentHTML('beforeend',`<h1>${categoria.cveCategoria}</h1> `)
    });
    categoriaElegida = data[0]?.cveCategoria &&'TERAP';
    
    imprimirPreguntas();

}

async  function imprimirPreguntas(){
    if(!categoriaElegida)return;
    const peticion = await fetch('js/preguntas.json');
    const data = await peticion.json();
    while (preguntas.firstChild){
        preguntas.removeChild(preguntas.firstChild);
      };
    
    data.forEach(categoria => {
        if(categoriaElegida == categoria.cveCategoria)
        preguntas.insertAdjacentHTML('beforeend',`
        <h1 class="pregunta">${categoria.pregunta}</h1> 
        <P class="respuesta">${categoria.respuesta}</P>
        `);
    });
    

}





imprimirCategorias();
categorias.addEventListener('click', e =>{
    categoriaElegida = e.target.textContent
    console.log(categoriaElegida);
    imprimirPreguntas();

})