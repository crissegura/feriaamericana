import React,{useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import db from "../services/firebase";
import { storage } from '../services/firebase';
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

const NuevoProducto = () =>{
    
    const [prod, setProd] = useState({
        foto:'',
        nombre:'',
        descripcion:'',
        categoria:'',
        precio:parseInt(),
        stock:''})

    const getInfo = (event) =>{
        event.preventDefault();
        const {name,value} = event.target
        setProd((prev)=>{
            return {...prev,[name]:value}
        })
    }


    const [file, setFile] = useState("");

    const getchange = (event,arr) =>{
        event.preventDefault();
        console.log(event.target.files[0])
        const {name,value} = event.target
        setFile(event.target.files[0])
        setProd((prev)=>{
            return {...prev,[name]:value}
        })
        console.log("antes")
        const file=event.target.files[0]
        console.log(file)
        console.log(file.name)
        console.log("despues")
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        });
    }
    const subir = async()=>{
        try{
            const docRef = await addDoc(collection(db, "productos"), {
                nombre: prod.nombre,
                foto: "https://firebasestorage.googleapis.com/v0/b/feriaamericana-55805.appspot.com/o/"+file.name+"?alt=media",
                descripcion:prod.descripcion,
                categoria:prod.categoria,
                precio: prod.precio,
                stock:1
              });
            console.log("ME SUBI", docRef)
        }catch(error){
            console.log(error)
        }
    }

    return (

        <div style={{textAlign:'center',paddingTop:'10px'}}>  
           <h3>Cargar nuevo producto</h3>
            <form  method="post" >
                <label>Imagen</label>
                <input 
                    type="file"
                    name="foto" 
                    value={prod.foto}
                    onChange={getchange} />
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
                    type="number" 
                    name="precio" 
                    value={prod.precio}/>
                <br />
                <br />
                <Link to='/padministrador'>
                    <Button onClick={subir}> 
                        Subir producto
                    </Button> 
                </Link>
                
           </form>
        </div>

    )
}

export default NuevoProducto;