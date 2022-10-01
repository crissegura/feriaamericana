import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Contador from "./Contador";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../services/firebase';
import Loader from "./Loader";


const Inicio = () =>{

    const [productos, setProductos] = useState([])

    const {categoria} = useParams()


    const getProductos=async()=>{
        try{
            const document = collection(db,"productos")
            const col = await getDocs(document)
            console.log('col.docs', col.docs)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setProductos(result)
            console.log('result', result)
        }catch(error){
            console.log(error)
        }
    }

    const getDataCategory = async (category) =>{
    
        try{
          const document = query (collection(db,"productos"),where("categoria","==",category))
          const col = await getDocs(document)
          console.log('col.docs', col.docs)
          const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
          setProductos(result)
          console.log('result', result)
        }catch(error){
          console.log(error)
    
        }
      }

    useEffect(()=>{
        categoria? getDataCategory(categoria) : getProductos()
    },[ categoria ])

    const [texto, setTexto] = useState([])

    const getTexto=({target})=>{
        setTexto(target.value)
    }

    const buscarProducto=productos.filter(producto=>
                        producto.nombre.toLowerCase()
                        .includes(texto.toString()
                        .toLocaleLowerCase()))

    return(
        <>
        {
            productos.length !==0?
            (<div>
                    <div className='formBuscar'>
                <label htmlFor="">Buscar producto</label>
                <input className="inputBuscar" type="text" value={texto} onChange={getTexto} placeholder="🔍︎ jean" />
            </div>
            
            <div className="container">
                {
                    buscarProducto.length !==0?
                    <div className="container">
                    {buscarProducto.map((producto)=>(
                        <Card className="card">
                            <Card.Img variant="top" src={producto.foto} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                                   {producto.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    ${producto.precio}
                                </Card.Text>
                                <Contador producto={producto.nombre} productoCard={producto} />
                            </Card.Body>
                        </Card>
                    ))}
                    </div>
                    :
                    <><h1 className="noSeEncuentra">No se encontró nada con "{texto}"</h1></>
                }
            </div>
            </div >) : (
            <div className="d-flex justify-content-center py-4">
                 <Loader />
            </div>
            )
        }
            
        </>
    )

}

export default Inicio;