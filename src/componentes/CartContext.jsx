import { createContext , useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const clearCart = () =>{
        setCart([])
    }

    const addToCart = (item, cantidad) =>{
        console.log('item:' + item)
        console.log('cantidad:' + cantidad)
        if (isInCart(item.id)){
            const newCart = [...cart]
            for (const elemento of newCart){
                if(elemento.item.id === item.id){
                    elemento.cantidad = elemento.cantidad + cantidad
                }
            }
            setCart(newCart)
        }else{
            setCart(
                [
                    ...cart,{
                        item: item,
                        cantidad: cantidad
                    }
                ]
            )
        }
    }

    const isInCart = (id) =>{
        return cart.find((elemento)=> elemento.item.id === id)
    }

    const getTotal=()=>{
        let total = 0
        cart.forEach((element)=>{
            total = total + (element.cantidad * element.item.precio)
        })
        return total;
    }

    const totalCantidad =()=>{
        let cantidad = 0
        cart.forEach((element)=>{
            cantidad += element.cantidad
        })
        return cantidad;
    }

    const removeFromCart = (id) =>{
        const newCart = [...cart].filter(elemento=> elemento.item.id !== id)
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