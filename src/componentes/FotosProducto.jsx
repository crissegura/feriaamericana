import React,{useState,useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../services/firebase';


const FotosProducto=()=>{

    const [fotos, setFotos] = useState([])

    const getFotos=async()=>{
        try{
            const document = collection(db,"productos")
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc={id:doc.id,...doc.data()})
            setFotos(result)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getFotos()
    }, []);



    return(
        <>
        <Carousel>
                   
            <Carousel.Item>
                <img className="d-block w-50"
                src=''
                alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-50"
                src=''
                alt=""
                />
            </Carousel.Item>
        </Carousel>
        {/*
            fotos.map((foto)=>{
                <Carousel>
                    {console.log(foto.foto)}
                    <Carousel.Item>
                        <img className="d-block w-50"
                        src={foto.foto}
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50"
                        src={foto.foto}
                        alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            })
        */}
        </>
    )

}

export default FotosProducto;