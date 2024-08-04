document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos')
    const productos = await getProductos()
    let body = ""

    let count = 0

    for (let producto of productos) {
        if(count ===0){
            body +=  `<div class="row">`
        }
        body += `
            <article class="card col">
            <div class = "contenedor-imagen position-relative">
            <img src= ${producto.image} alt= ${producto.title} width="100 class="position-absolute top-100 start-100 translate-middle">
            </div>

            <h3>${producto.title}</h3>
            <span class="categoria">men's clothing</span>
            <span>09.95</span>

            <button class="boton" type="button">Agregar al carrito</button>
          </article>
        
        `
        count = count + 1;

        if(count ===3){
            body += `</div>`
            count = 0
        }
    }
    listaProductos.innerHTML = body


    // console.log(productos)


})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products')

    const productos = await response.json()

    return productos


}

