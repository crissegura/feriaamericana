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
        <div>
            <Link to='/carrito/'>
                <Button variant='primary' className='agregarCarrito' onClick={()=> onAdd()} >
                    Agregar al carrito
                </Button>
            </Link>
            
        </div>
    )
}

export default Contador;