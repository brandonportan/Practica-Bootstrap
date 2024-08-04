document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos')
    const productos = await getProductos()
    let body = ""


    for(let producto of productos) {
        body += `
            <article class="card">
            <img src= ${producto.image} alt= ${producto.title} width="100">

            <h3>${producto.title}</h3>
            <span class="categoria">men's clothing</span>
            <span>09.95</span>

            <button class="boton" type="button">Agregar al carrito</button>
        </article>
        
        `
    }
    listaProductos.innerHTML = body


    // console.log(productos)


})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products')

    const productos = await response.json()

    return productos


}

