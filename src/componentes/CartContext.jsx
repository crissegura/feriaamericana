import { createContext , useState } from "react";
import {doc, updateDoc} from 'firebase/firestore';
import db from '../services/firebase';


export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const clearCart = () =>{
        setCart([])
    }

    const updateStock2 = () =>{
        cart.map((e)=>{
            const docs = doc(db, 'productos', e.item.id)
            const updStock = -1
            updateDoc(docs, {
                stock : updStock
            })
        })
    }

    const addToCart = (item,cantidad) =>{
        if (isInCart(item.id)){
            const newCart = [...cart]
            for (const elemento of newCart){
                if(elemento.item.id === item.id){
                    elemento.cantidad = elemento.cantidad + cantidad
                }
            }
            updateStock2()
            setCart(newCart)
        }else{
            updateStock2()
            setCart(
                [
                    ...cart,{
                        item: item,
                    }
                ]
            )
        }
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