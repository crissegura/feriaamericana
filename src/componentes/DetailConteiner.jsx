import React, {useEffect,useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../services/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';
import Loader from './Loader';


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])

    const getItem = async (idItem) =>{
        try{
            const document = query (collection(db,"productos"),where("id","==",idItem))
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setItem(result)
          }catch(error){
            console.log(error)
      
          }
        }

    useEffect(()=>{
        getItem(id)
    },[])

    console.log('itemDetailContainer', item)

    return(
       item ? (< ItemDetail item={item} /> ) : ( <Loader /> ) 
    )

}

export default ItemDetailContainer;