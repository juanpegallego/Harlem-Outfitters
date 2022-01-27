import Swal from 'sweetalert2'


const successNotification = (cantidad, title) => {

    let addedToCartMessage = ''

    if (cantidad > 1) {
        addedToCartMessage = `${cantidad} unidades.`
    } else {
        addedToCartMessage = `${cantidad} unidad ${title}.`
    }

    Swal.fire({
        title: 'Agregado al carrito',
        text: addedToCartMessage,
        icon: 'success',
        confirmButtonText: ' Continuar'

    })
}

const successOrder = (cantidad, metodoContacto) => {
    Swal.fire({
        title: 'Pedido procesado correctamente',
        text: `El codigo de su orden es ${cantidad}, este  codigo  te enviaremos por ${metodoContacto} .`,
        icon: 'success',
        confirmButtonText: 'Finalizar'

    })
}

const errorOrder = (message) => {
    Swal.fire({
        title: 'Error al procesar su orden',
        text: message,
        icon: 'error',
        confirmButtonText: 'Continuar'

    })
}

const errorNotification = (producto) => {
    Swal.fire({
        title: 'Ya lo agregaste',
        text: `El producto ${producto} ya existe en tu carrito.`,
        icon: 'error',
        confirmButtonText: ' Volver'

    })
}

export { successNotification, errorNotification, successOrder, errorOrder }