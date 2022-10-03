import {React, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {CartContext} from './CartContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link } from 'react-router-dom';


function Contador({producto,productoCard}){

    const {addToCart} = useContext(CartContext);

    const Swal = require('sweetalert2')


    const onAdd = () => {
        addToCart(productoCard)
        Swal.fire({
            icon:'success',
            title: 'Agregaste '+producto+' al carrito!',
            timer:'1800',
            showConfirmButton:false,
          })
    }

    return(
        <div>
            <Button variant='primary' className='agregarCarrito' onClick={()=> onAdd()} >Agregar al carrito</Button>
        </div>
    )
}

export default Contador;