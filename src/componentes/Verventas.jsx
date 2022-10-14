import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { collection, getDocs} from 'firebase/firestore';
import db from '../services/firebase';
import Loader from "./Loader";


const Verventas = () =>{

    const [productos, setProductos] = useState([])
    const getProductos=async()=>{
        try{
            const document = collection(db,"Pedidos")
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setProductos(result)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductos()
    },[])

    return(
        <>
            <h3 style={{textAlign:'center'}} >Ventas</h3>
            {
            <div className="">
            {productos.map((producto)=>(
                <Card>
                    <Card.Body>
                        {console.log(producto.items)}
                        <Card.Title>
                            Producto: {producto.items.title}
                        </Card.Title>
                        <Card.Text>
                            Comprador: {producto.buyer.nombre}
                        </Card.Text>
                        <Card.Text>
                            WhatsApp: {producto.buyer.telefono}
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </div>
        }
    </>
    )
}

export default Verventas;