import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CartWidget({ cantidad_total }) {
    return (

        <div>

            <ShoppingCartIcon />
            {cantidad_total}
        </div>


    )
}

export default CartWidget
