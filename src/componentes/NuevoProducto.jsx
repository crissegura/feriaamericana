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
        foto1:"",
        foto2:"",
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
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");

    const getchange = (arr,event) =>{
        event.preventDefault();

        const {name,value} = event.target

        if (arr=== 0) {
        setFile(event.target.files[0])
        }
       if (arr=== 1) {
        setFile1(event.target.files[0])
        }
        if ( arr===2){
        setFile2(event.target.files[0])
        }
        setProd((prev)=>{
            return {...prev,[name]:value}
        })

        const file=event.target.files[0]

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
                foto1:"https://firebasestorage.googleapis.com/v0/b/feriaamericana-55805.appspot.com/o/"+file1.name+"?alt=media",
                foto2:"https://firebasestorage.googleapis.com/v0/b/feriaamericana-55805.appspot.com/o/"+file2.name+"?alt=media",
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
                <label>Imagen 1</label>
                <input 
                    type="file"
                    name="foto" 
                    value={prod.foto}
                    onChange={(event) => getchange(0,event)} />
                <br />
                <br />
                <label>Imagen 2</label>
                 <input
                    type="file"
                    name="foto1"
                    value={prod.foto1}
                    onChange={(event) => getchange(1,event)} />
                <br />
                <br />
                <label>Imagen 3</label>
                 <input
                    type="file"
                    name="foto2"
                    value={prod.foto2}
                    onChange={(event) => getchange(2,event)} />
                <br />
                <br />
                <label>Nombre</label>
                <input 
                    placeholder="Pantalon de jean"
                    type="text" 
                    maxLength='22'
                    name="nombre" 
                    value={prod.nombre}
                    onChange={getInfo} />
                <br />
                <br />
                <label>Descripcion</label>
                <input 
                    type="text" 
                    name="descripcion" 
                    maxLength='78'
                    value={prod.descripcion}
                    onChange={getInfo} />
                <br />
                <br />
                <label>Categoria</label>
                <input 
                    type="text" 
                    name="categoria" 
                    value={prod.categoria}
                    onChange={getInfo}
                    placeholder='hombres/mujeres/niños' />
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