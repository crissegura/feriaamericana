import React,{useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import db from "../services/firebase";
import { Link } from "react-router-dom";


const NuevoProducto = () =>{
   
    const [prod, setProd] = useState({
        foto:'',
        nombre:'',
        descripcion:'',
        categoria:'',
        precio:'',
        stock:''})

    const getInfo = (event) =>{
        event.preventDefault();
        const {name,value} = event.target
        setProd((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const subir = async()=>{
        try{
            const docRef = await addDoc(collection(db, "productos"), {
                nombre: prod.nombre,
                foto: prod.foto,
                descripcion:prod.descripcion,
                categoria:prod.categoria,
                precio: prod.precio,
                stock:1
              });
            console.log("ME SUBI", docRef.id)
        }catch(error){
            console.log(error)
        }
    }

    return (

        <div style={{textAlign:'center',paddingTop:'10px'}}>  
           <h3>Cargar nuevo producto</h3>
            <form>
                <label>Imagen</label>
                <input 
                    type="text" 
                    name="foto" 
                    value={prod.foto}
                    onChange={getInfo} />
                <br />
                <br />
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={prod.nombre}
                    onChange={getInfo} />
                <br />
                <br />
                <label>Descripcion</label>
                <input 
                    type="text" 
                    name="descripcion" 
                    value={prod.descripcion}
                    onChange={getInfo} />
                <br />
                <br />
                <label>Categoria</label>
                <input 
                    type="text" 
                    name="categoria" 
                    value={prod.categoria}
                    onChange={getInfo} />
                <br />
                <br />
                <label >precio</label>
                <input 
                    onChange={getInfo}
                    type="text" 
                    name="precio" 
                    value={prod.precio} />
                <br />
                <br />
                <Link to='/'>
                    <Button onClick={subir}> 
                        Subir producto
                    </Button> 
                </Link>
                
           </form>
        </div>

    )
}

export default NuevoProducto;