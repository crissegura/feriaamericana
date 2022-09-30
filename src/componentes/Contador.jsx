import {React, useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {CartContext} from './CartContext';

function Contador({producto,productoCard}){

    const {addToCart} = useContext(CartContext);

    const [cantidad, setCantidad]= useState(1)

    const sumarCant = () =>{
        if(cantidad < 10) {setCantidad(cantidad+1)}
    }
    const restarCant = () =>{
        if(cantidad > 1) {setCantidad(cantidad-1)}
    }

    const onAdd = () => {
        alert('Agregaste '+cantidad+' de '+producto+' al carrito!!!')
        addToCart(productoCard,cantidad)
    }

    return(
        <div>
            <Button variant='primary' onClick={()=> onAdd()} >Agregar al carrito</Button>
            <div className='btn-cantidad'>
                <Button  variant='danger' onClick={()=> restarCant()}>-</Button>
                <p className='px-3'>
                    {cantidad}
                </p>
                <Button  variant="success" onClick={()=> sumarCant()}>+</Button>
            </div>
        </div>
    )
}

export default Contador;