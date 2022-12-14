import React, {useState,useContext} from 'react';
import { CartContext } from './CartContext';
import db from '../services/firebase';
import {addDoc, collection,doc, updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Checkout = () => {

    const {cart,getTotal,clearCart} = useContext(CartContext)

    const [orderId, setOrderID] = useState()

    const [buyer, setBuyer] = useState({
        nombre: '',
        telefono: '',
    })

    const {nombre,telefono} = buyer

    const inputChange = (e) =>{
        setBuyer((
            { 
                ...buyer,
                [e.target.name] : e.target.value 
            }
        ))
    }

    const generateOrder = async (data) =>{
        try {
            const col = collection(db,'Pedidos')
            const order = await addDoc(col,data)
            setOrderID(order.id)
            clearCart()
            actualizarStock()
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarStock=()=>{
        cart.map((e)=>{
            const docs = doc(db,'productos',e.item.id)
            updateDoc(docs, {
                stock : 0
            })
        })
    }

   const inputSubmit = (e) =>{
    e.preventDefault()
    const items = cart.map(e=>{return{  
        id : e.item.id,
        title : e.item.nombre,
        precio : e.item.precio, 
    }})
    const dia = new Date()
    const total = getTotal()
    const data = {buyer,items,dia,total}
    generateOrder(data)
    }

    return (
        <div>
            {!orderId? (
            <div className='containerFinalizar'>
                <h1 className='tituloFinalizando'>Finalizando compra</h1>
                <form onSubmit={inputSubmit} >
                    <h3>Datos del comprador</h3>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={nombre}
                        placeholder='Nombre y apellido'
                        onChange={inputChange} 
                    /> <br/>
                    <br/>
                    <input 
                        type="text" 
                        name="telefono" 
                        placeholder='Whatsapp'
                        value={telefono}
                        onChange={inputChange} 
                    /><br/>
                    <br/>
                    <Button>
                        <input 
                            className='confirmarCompra'
                            type="submit" 
                            value="Finalizar compra"
                        />
                    </Button>
                    <Link to='/' style={{paddingLeft:'5px'}}>
                        <Button variant='danger' onClick={clearCart}>
                            Cancelar compra
                        </Button>
                    </Link>

                </form>
            </div>) : (
            <div className='orderDiv'>
                <h3 className='orderTitle'>Orden de compra</h3>
                <h4 className='norden'> Gracias por tu compra! <br />En breve nos vamos a estar comunicando con vos para arreglar el tema del pago y del envio.<br/> Saludos! </h4>
            </div>
                )
            }
        </div>
    );
}

export default Checkout;