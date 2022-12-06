import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Contador from "./Contador";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../services/firebase';
import Loader from "./Loader";
import Carousel from 'react-bootstrap/Carousel';
import FotosProducto from "./FotosProducto";


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

    const mostrarStock1 = buscarProducto.filter(producto=>producto.stock>0)

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
                    mostrarStock1.length !==0?
                    <div className="container">
                    {mostrarStock1.map((producto)=>(
                        <Card className="card">
                            <Carousel>
                                <Carousel.Item>
                                <Card.Img variant="top" className="imgInicio" src={producto.foto} />
                                </Carousel.Item>
                                <Carousel.Item>
                                <Card.Img variant="top" className="imgInicio" src={producto.foto1} />
                                </Carousel.Item>
                                <Carousel.Item>
                                <Card.Img variant="top" className="imgInicio" src={producto.foto2} />
                                </Carousel.Item>
                            </Carousel>
                            
                            <Card.Body>
                                <h5 className="cardTitle">{producto.nombre}</h5>
                                <p className="cardDescription">
                                   {producto.descripcion}
                                </p>
                                <Contador producto={producto.precio} productoCard={producto}/>
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