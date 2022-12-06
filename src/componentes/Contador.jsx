import {React, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';


function Contador({stock, producto, productoCard}){

    const {addToCart} = useContext(CartContext);


    const onAdd = () => {
        addToCart(productoCard)
    }

    return(
        <div className='divPrecioyAdd'>
            <p>$ {producto} </p>
            {/*<Link to='/carrito/'>
                <Button variant='primary' onClick={()=> onAdd()} >
                    Reservar
                </Button>
            </Link>
            */} 
        </div>
    )
}

export default Contador;