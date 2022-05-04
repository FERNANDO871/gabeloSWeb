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
    const fr=new FileReader();
    try {
        console.log( fr.FileReader.readAsDataURL("../img/prod/fg.jpeg"));
    } catch (e) {
        console.log(e);
    }
    
    data.forEach(producto =>{
        
        try{

            // console.log(producto);
            template.querySelector('h5').textContent = producto.nombre;
            template.querySelectorAll('p')[0].textContent = '$'+producto.precio;
            template.querySelectorAll('p')[1].textContent = producto.descripcion;
            template.querySelector('img').src = "img/prod/" + producto.foto;
            console.log( fr.FileReader.readAsDataURL("img/prod/fg.jpeg"));
        }catch(e){
            console.log(e);
        }

        const clone = template.cloneNode('true');
        fragment.appendChild(clone);
        // console.log(clone);

    })
    items.appendChild(fragment);
    console.log("data");
    
}