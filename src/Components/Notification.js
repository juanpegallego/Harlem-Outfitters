import Swal from 'sweetalert2'


const successNotification = (cantidad) => {

    let addedToCartMessage = ''

    if (cantidad > 1) {
        addedToCartMessage = `${cantidad} unidades.`
    } else {
        addedToCartMessage = `${cantidad} unidad.`
    }

    Swal.fire({
        title: 'Agregado al carrito',
        text: addedToCartMessage,
        icon: 'success',
        confirmButtonText: ' Continuar'

    })
}

const successOrder = (cantidad) => {
    Swal.fire({
        title: 'Pedido procesado correctamente',
        text: `El codigo de su orden es ${cantidad}, este es el codigo que nos deberas enviar por Whatsapp .`,
        icon: 'success',
        confirmButtonText: 'Continuar'

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