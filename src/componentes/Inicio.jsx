import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Contador from "./Contador";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../services/firebase';
import Loader from "./Loader";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Inicio = () =>{

    const [productos, setProductos] = useState([])

    const {categoria} = useParams()

    const getProductos=async()=>{
        try{
            const document = collection(db,"productos")
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setProductos(result)
        }catch(error){
            console.log(error)
        }
    }

    const getDataCategory = async (category) =>{
    
        try{
          const document = query (collection(db,"productos"),where("categoria","==",category))
          const col = await getDocs(document)
          const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
          setProductos(result)
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
                <label>¿Qué estás buscando? </label>
                <input className="inputBuscar" type="text" value={texto} onChange={getTexto} placeholder="ej: iphone " />
            </div>
            
            <div className="container">
                {
                    buscarProducto.length !==0?
                    <div className="contenedor">
                    {buscarProducto.map((producto)=>(
                        <div>
                            <Card className="card">
                                <Carousel>
                                    <Carousel.Item>
                                    <img className="imgInicio" src={producto.foto} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img className="imgInicio" src={producto.foto1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img className="imgInicio" src={producto.foto2} />
                                    </Carousel.Item>
                                </Carousel>
                                <Card.Body>
                                    <h5 className="cardTitle">{producto.nombre}</h5>
                                    <Contador producto={producto.precio}/>
                                    <Link to={`/detalle/${producto.id}`}>
                                        <Button variant='primary' >Ver producto</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
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