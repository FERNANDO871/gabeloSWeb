const cursos = document.querySelector('.contenedor_cursos');

document.addEventListener('load',consultar())

async function consultar(){

    try{
        const res = await fetch("js/cursos.json");
        const data = await res.json();
        console.log(res)
        console.log(data);
        imprimirproductos(data);
    }catch(error){
        console.log(error)
    }
}


function imprimirproductos(data){

    data.forEach((curso,i) =>{
            // console.log(curso);
        try{

            
            cursos.insertAdjacentHTML('beforeend',`
            <div class="curso" data-curso="${i}">
            <div class="img_curso" style="
            background-image: url(${curso.url_img});
            background-size: 30%;
            background-repeat: no-repeat;
            background-position: center;
            "></div>
            <h1 class="nombre_curso">${curso.curso}</h1>
          </div>

            `);
            
        }catch(e){
            console.log(e, 'error');
        }
    })
}

