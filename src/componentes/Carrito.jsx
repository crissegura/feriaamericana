import React,{useContext} from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Carrito = () =>{

    const {cart, removeFromCart, getTotal} = useContext(CartContext);

    return(
        <>
            {
                cart.length !== 0 ? (
                <div>
                    <div className="container">
                        {cart.map((element)=>
                            <Card className="card">
                                <Card.Img variant="top" src={element.item.foto} />
                                <Card.Body>
                                    <Card.Title>{element.item.nombre}</Card.Title>
                                    <Card.Text>
                                    <p> ${element.item.precio}</p>
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="danger" onClick={()=> removeFromCart(element.item.id)}>
                                        Eliminar
                                </Button>
                            </Card>
                        )}
                    </div>
                    <div className="containerTotal">
                        <h3 >Precio total: ${getTotal()} </h3>
                        <Link to='/checkout'>
                            <Button variant='primary' >
                                Confirmar compra
                            </Button>
                        </Link>
                    </div>
                </div>
                ) : (
                    <div className="carritoVacio">
                        <h1>¡Carrito vacio!</h1>
                        <Link to='/'>
                            <Button variant='primary'>
                                Mirá nuestros productos
                            </Button>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default Carrito;