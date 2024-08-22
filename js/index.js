const carrito = document.querySelector('#carrito')
const footer = document.querySelector('#footer')
const template = document.querySelector('#template').content
const templateFooter = document.querySelector('#templateFooter').content
const fragment = document.createDocumentFragment()
let carritoArray = []

document.addEventListener('click', (e) => {
    //console.log("🚀 ~ document.addEventListener ~ e:", e)
    if (e.target.matches('.card button')) {
        agregarCarrito(e)
    }

    if (e.target.matches('.list-group-item .btn-success')) {
        btnAumentar(e)
    }
    if (e.target.matches('.list-group-item .btn-danger')) {
        btnDisminuir(e)
    }
    if (e.target.matches('#finalizarCompra')) {
        finalizarCompra();
    }
})

const btnAumentar = e => {
    carritoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++
        }
        return item
    })
    pintarCarrito()
}

const btnDisminuir = e => {
    carritoArray = carritoArray.filter((item) => {
        if (item.id === e.target.dataset.id){
            if (item.cantidad > 0) {
                item.cantidad--
                if (item.cantidad === 0)
                    return
                return item
            }
        } else{
            return item
        }
    })
    pintarCarrito()
}

const agregarCarrito = e => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }
    const index = carritoArray.findIndex((item) => item.id === producto.id)
    if (index === -1) {
        carritoArray.push(producto)
    } else {
        carritoArray[index].cantidad++
    }

    pintarCarrito()
    //console.log("🚀 ~ agregarCarrito ~ producto:", producto, carritoArray)
}


const pintarCarrito = () => {
    carrito.textContent = ''
    carritoArray.forEach((item) => {
        const clone = template.cloneNode(true)
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.rounded-pill').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
        clone.querySelector('.btn-success').dataset.id = item.id
        clone.querySelector('.btn-danger').dataset.id = item.id

        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
    pintarFooter()
}

const pintarFooter = () => {
    footer.textContent = ''
    const total = carritoArray.reduce((acc, current) => acc + current.precio * current.cantidad, 0)
    const clone = templateFooter.cloneNode(true)
    clone.querySelector('p span').textContent = total
    footer.appendChild(clone)
}

const finalizarCompra = () => {
    // Limpia el array del carrito
    carritoArray.length = 0; // Alternativa para vaciar el array

    // Limpia el contenido del carrito en la UI
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }

    // Limpia el contenido del footer en la UI
    while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
    }

    // Actualiza el footer para mostrar un total de $0
    const cloneFooter = templateFooter.cloneNode(true);
    cloneFooter.querySelector('p span').textContent = 0;
    footer.appendChild(cloneFooter);
};
