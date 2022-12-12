import React, {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../services/firebase";
import {collection, where, getDocs, doc } from 'firebase/firestore';
import Loader from './Loader';


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])


    const getProductos=async()=>{
      try{
          const document = collection(db,"productos")
          const col = await getDocs(document)
          const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
          setItem(result)
      }catch(error){
          console.log(error)
      }
  }

    useEffect(()=>{
        getProductos()
    },[])

    
    


    return(
      <>  
      {
         item ? (< ItemDetail item={item} id={id} /> ) : ( <Loader /> ) 
      }
      </>
    )

}

export default ItemDetailContainer;