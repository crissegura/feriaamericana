import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { collection, getDocs,doc,deleteDoc} from 'firebase/firestore';
import db from '../services/firebase';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    const Delete =async(id)=>{
        await deleteDoc(doc(db,'Pedidos',id))
    }

    useEffect(()=>{
        getProductos()
    },[])

    return(
        <>
            <h3 style={{textAlign:'center',paddingTop:'10px'}} >Ventas</h3>
            {
            <div className="container">
            {productos.map((producto)=>(
                <Card style={{textAlign:'left'}}>
                    <Card.Body>
                    {
                        producto.items.length>1?
                        <div> <h5>Productos</h5>{producto.items.map((e)=>{
                            return  <li style={{textAlign:'left',marginBottom:'8px'}} > {e.title} </li>
                        })
                        } </div>
                        :
                        <div>
                            <h5>
                            Producto
                            </h5>
                            <li style={{textAlign:'left',marginBottom:'8px'}} >{producto.items[0].title}</li>
                        </div>  
                    }
                        <Card.Text>
                            <b>Comprador: </b>{producto.buyer.nombre}
                        </Card.Text>
                        <Card.Text>
                            <b>WhatsApp:</b> {producto.buyer.telefono}
                        </Card.Text>
                        <Card.Text>
                            <b>Total $</b>{producto.total}
                        </Card.Text>
                        <Link to='/padministrador'>
                        <Button  onClick={()=>Delete(producto.id)} variant='danger'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </Button>
                        </Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
        }
    </>
    )
}

export default Verventas;