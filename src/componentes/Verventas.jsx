import React,{useState,useEffect} from "react";
import { collection, getDocs} from 'firebase/firestore';
import db from '../services/firebase';



const Verventas=()=>{

    const [ventas, setVentas] = useState([])

    const getVentas=async()=>{
        try{
            const document = collection(db,"Pedidos")
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setVentas(result)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getVentas()
    },[])

    return(
        <div style={{textAlign:'center',paddingTop:'10px'}} >
            <h3>Ventas</h3>
            {
                ventas.map((venta)=>{
                   <h3> {venta.buyer} </h3>
                })
            }
        </div>
    )

}

export default Verventas;