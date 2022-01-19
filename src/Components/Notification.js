import Swal from 'sweetalert2'


const successNotification = (cantidad) => {
    Swal.fire({
        title: 'Agregado al carrito',
        text: `${cantidad} unidades.`,
        icon: 'success',
        confirmButtonText: ' Continuar'

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

export { successNotification, errorNotification }