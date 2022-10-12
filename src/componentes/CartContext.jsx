import { createContext , useState } from "react";
import {doc, updateDoc} from 'firebase/firestore';
import db from '../services/firebase';


export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

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

    const addToCart = (item) =>{
            updateStock2Cart([item])
            setCart(
                [
                    ...cart,{
                        item: item,
                    }
                ]
            )

        }

    const getTotal=()=>{
        let total = 0
        cart.forEach((element)=>{
            total = total + (element.item.precio)
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

    const isInCart = (id) =>{
        return cart.find((elemento)=> elemento.item.id === id)
    }

    const updateStock3 = () =>{
        cart.map((e)=>{
            const docs = doc(db, 'productos', e.item.id)
            const updStock = 1
            updateDoc(docs, {
                stock : updStock
            })
        })
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