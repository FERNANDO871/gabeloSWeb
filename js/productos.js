const items = document.getElementById('insertar_productos');
let contenedorItems;
let cantidadActual =0;
let cantidadMaxima = 0;
let cantidadItem ;


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
            // console.log(producto);
        try{

            
            items.insertAdjacentHTML('beforeend',`
            
            
            <div class="card_body data-idProducto:"${i}"> 
            <div class="card_img" style="background-image: url(img/prod/${producto.foto})"></div>
                <div class="card_info">
                        <h5 class="card_nombre">${producto.nombre}</h5>
                        <p class="card_precio">$ ${producto.precio}</p>
                        <p class="card_descripcion">${producto.descripcion}</p>
                        <p class="card_disponibilidad ${producto.cantidad>0 ? 'disponibles':'no_disponibles'}">disponible${producto.cantidad>1 ? 's':''}: <spand class="card_cantidadMaxima">${producto.cantidad}</span>
                        </p>

                      <div class="card_contenedor_cantidad ${producto.cantidad<=0 ? 'opacidadMedia':''}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon menos ${producto.cantidad>0 ? 'opacidadMedia':''}" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                            </svg>
                            <p class="card_cantidad">0</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon mas giro_icon" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                      </div>
                      <div class="card_contenedor_botones">
                            <div class="comprar">
                              <button type="button" class="botones">comprar</button>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                              </svg>
                            </div>
                            
                            <div class="agregar">
                              <button type="button" class="botones">agregar</button>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                              </svg>
                              
                            </div>
                      </div>

                </div>
            </div>        
            `);
            
        }catch(e){
            console.log(e, 'error');
        }
    })
}

const seleccion = function(e){
    contenedorItems = e.target.closest(".card_contenedor_cantidad");
    cantidadItem =contenedorItems.querySelector('.card_cantidad');
    cantidadActual = parseInt(cantidadItem.textContent);
    cantidadMaxima =parseInt( e.target.closest(".card_info").querySelector('.card_cantidadMaxima').textContent);
}

const restar = function(e) {
    seleccion(e)
    contenedorItems.querySelector('.mas').classList.remove('opacidadMedia')
    contenedorItems.querySelector('.mas').classList.add('giro_icon')
    if(cantidadActual <1)return;
    cantidadItem.textContent = --cantidadActual;
    cantidadActual <= 0 && contenedorItems.querySelector('.menos').classList.add('opacidadMedia');
    cantidadActual <= 0 && contenedorItems.querySelector('.menos').classList.remove('giro_icon');
}
const sumar = function(e) {
    seleccion(e);
    contenedorItems.querySelector('.menos').classList.remove('opacidadMedia')
    contenedorItems.querySelector('.menos').classList.add('giro_icon')
    if(cantidadActual >= cantidadMaxima) return;
    cantidadItem.textContent = ++cantidadActual;
    cantidadActual >= cantidadMaxima && contenedorItems.querySelector('.mas').classList.add('opacidadMedia');
    cantidadActual >= cantidadMaxima && contenedorItems.querySelector('.mas').classList.remove('giro_icon');
}

items.addEventListener('click', e =>{
    if(e.target.classList.contains('menos'))restar(e);
    if(e.target.classList.contains('mas'))sumar(e);
})