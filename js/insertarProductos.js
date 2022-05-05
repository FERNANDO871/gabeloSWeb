const items = document.getElementById('insertar_productos');
const template = document.getElementById('template_productos');
const fragment = document.createDocumentFragment();

template.classList.remove('hidden');

document.addEventListener('load',consultar())

async function consultar(){

    try{
        const res = await fetch("js/productos.json");
        const data = await res.json();
        // console.log(res)
        // console.log(data);
        imprimirproductos(data);
    }catch(error){
        // console.log(error)
    }
}


function imprimirproductos(data){
    // console.log(data);

    data.forEach(producto =>{

        try{

            // console.log(producto);
            
            template.querySelector('h5').textContent = producto.nombre;
            template.querySelectorAll('p')[0].textContent = '$'+producto.precio;
            template.querySelectorAll('p')[1].textContent = producto.descripcion;
            template.querySelector('img').src = "img/prod/" + producto.foto;

            template.querySelectorAll('p')[2].textContent ="disponibles: " + producto.cantidad;


            
            template.querySelectorAll('p')[2].classList.contains('text-danger') && template.querySelectorAll('p')[2].classList.remove('text-danger');
            template.querySelectorAll('p')[2].classList.contains('text-success') && template.querySelectorAll('p')[2].classList.remove('text-success');
            template.querySelectorAll('p')[2].classList.add(producto.cantidad>0 ? 'text-success':'text-danger');




            
        }catch(e){
            console.log(e);
        }

        const clone = template.cloneNode('true');
        fragment.appendChild(clone);
        console.log(clone);

    })
    items.appendChild(fragment);
    console.log("data");
    
}