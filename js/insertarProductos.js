const items = document.getElementById('insertar_productos');
const template = document.getElementById('template_productos');
const fragment = document.createDocumentFragment();

template.classList.remove('hidden');
console.log(items.querySelector('h5').textContent);
console.log(template.querySelector('h5').textContent);

document.addEventListener('load',consultar())

async function consultar(){

    try{
        const res = await fetch("js/productos.json");
        const data = await res.json();
        // console.log(res)
        // console.log(data);
        imprimirproductos(data);
    }catch(error){
        console.log(error)
    }
}


function imprimirproductos(data){
    console.log(data);
    data.forEach(producto =>{
        // console.log(producto);
        template.querySelector('h5').textContent = producto.nombre;
        template.querySelectorAll('p')[0].textContent = '$'+producto.precio;
        template.querySelectorAll('p')[1].textContent = producto.descripcion;
        template.querySelector('img').src = "img/prod/" + producto.foto;

        const clone = template.cloneNode('true');
        fragment.appendChild(clone);
        console.log(clone);

    })
    items.appendChild(fragment);
    console.log("data");
    
}