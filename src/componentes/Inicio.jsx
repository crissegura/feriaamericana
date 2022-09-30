import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "./Contador";


const Inicio = () =>{

    const [productos, setProductos] = useState([])

    const url = 'https://rickandmortyapi.com/api/character'

    const getProductos=()=>{
        fetch(url)
         .then((resp)=>resp.json())
         .then((data)=>setProductos(data.results))
    }

    useEffect(()=>{
        getProductos()
    },[ ])

    const [texto, setTexto] = useState([])

    const getTexto=({target})=>{
        setTexto(target.value)
    }

    const buscarProducto=productos.filter(producto=>
                        producto.name.toLowerCase().
                        includes(texto.toString().
                        toLocaleLowerCase()))

    return(
        <>
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
                            <Card.Img variant="top" src={producto.image} />
                            <Card.Body>
                                <Card.Title>{producto.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Contador producto={producto.name} productoCard={producto} />
                            </Card.Body>
                        </Card>
                    ))}
                    </div>
                    :
                    <><h1>No se encontró nada con "{texto}"</h1></>
                }
            </div>
        </>
    )

}

export default Inicio;