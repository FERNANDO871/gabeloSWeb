const items = document.getElementById('insertar_productos');
const template = document.getElementById('template_productos');
const fragment = document.createDocumentFragment();



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
    data.forEach((producto,i) =>{
        console.log('insertando....', i)
        console.log(producto)
        try{
            items.insertAdjacentHTML('beforeend',`
            <div class="template_productos" id="template_productos" data-slicer="${i}" style="transform: translateX(${i*125}%)">

            <div class="img_producto" style="background-image: url(img/prod/${producto.foto});"></div>
            <div class="contenedor_producto_info">
              <h1 class="nombre_producto e1">${producto.nombre}.</h1>
              <p class="precio_producto e2">$${producto.precio}</p>
              <p class="description_producto e3">${producto.descripcion}</p>
              <p class="existencia e4  ${producto.cantidad>0 ? 'text-success':'text-danger'}">disponibles: </p>
              <p id="disponibles" class="e5 ${producto.cantidad>0 ? 'text-success':'text-danger'}">${producto.cantidad}</p>
  
  
              <div class="cantidad_producto e6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon_item_plus" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                <p id="cantidad_elegida"> 5 </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon_item_plus" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
  
              <div class="cont_comprar e7">
                <p class="e9 texto_secundario">comprar</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon_item_plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#007a4f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="7" y1="15" x2="7.01" y2="15" />
                  <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
              </div>
                
              <div class="cont_comprar e8">
                <p class="e11 texto_secundario">agregar</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon_item_plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#007a4f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="6" cy="19" r="2" />
                  <circle cx="17" cy="19" r="2" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </div>
                    
            </div>
        </div>
            `);
   
        }catch(e){
            console.log(e);
        }
    })
}