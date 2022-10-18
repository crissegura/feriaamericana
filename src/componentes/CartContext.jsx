import { createContext , useState } from "react";
import {doc, updateDoc} from 'firebase/firestore';
import db from '../services/firebase';


export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const updateStock3 = () =>{
        cart.map((e)=>{
            const docs = doc(db, 'productos', e.item.id)
            const updStock = 1
            updateDoc(docs, {
                stock : updStock
            })
        })
    }

    const updateStock4695 = () =>{
        console.log(cart)
        cart.map((e)=>{
            const docs = doc(db, 'productos', e.item.id)
            updateDoc(docs, {
                stock : 1
            })
        })
    }

    const clearCart = () =>{
        updateStock3()
        setCart([])
    }

    const updateStock2Cart = (cart) =>{
        cart.map((e)=>{
            const docs = doc(db, 'productos', e.id)
            const updStock = -1
            updateDoc(docs, {
                stock : updStock
            })
        })
    }

    const prueba=()=>{
        alert('hola')
    }

    const addToCart = (item) =>{
            updateStock2Cart([item])
            setCart(
                [
                    ...cart,{
                        item: item,
                    }
                ]
            )
            setTimeout(prueba,3000);
        }

    const getTotal=()=>{
        let total = 0
        cart.forEach((element)=>{
            total = total + parseInt(element.item.precio)
        })
        return total;
    }

    const totalCantidad =()=>{
        let cantidad = 0
        cart.forEach(()=>{
            cantidad = cantidad +1 
        })
        return cantidad;
    }
    
    const removeFromCart = (id) =>{
        const newCart = [...cart].filter(elemento=> elemento.item.id !== id)
        updateStock3()
        setCart(newCart)
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        getTotal,
        totalCantidad,
    }

    return  (
        <Provider value={context}>
            {children}
        </Provider>
    )
}