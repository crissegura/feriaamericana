import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({item, id}) =>{

    return(
        <div>
            { item.map((a)=>{
                if(a.id===id){
                return <div className='detail detail2 my-2'>
                            <div className='childDetail childDetail2'>
                            <h2 className='my-3 tituloCel'> {a.nombre} </h2>
                                <Carousel fade>
                                        <Carousel.Item>
                                        <img className="imgDetail imgDetail2" src={a.foto} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <img className="imgDetail imgDetail2" src={a.foto1} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <img className="imgDetail imgDetail2" src={a.foto2} />
                                        </Carousel.Item>
                                    </Carousel>
                            </div>
                            <div className='childDetail childDetail2'>
                                <h2 className='my-3 titulopc'> {a.nombre} </h2>
                                <p className='my-3'> {a.descripcion} </p>
                                <p className='my-3'> Precio <b> ${a.precio} </b> </p>
                                {
                                    a.stock!=0?
                                    <h6 className='my-3'> ✅ Stock disponible </h6>
                                    :
                                    <h6 className='my-3'> ❌ AGOTADO </h6>
                                }
                                <a href="https://walink.co/19a8ab" target='-' className='btnDet btnDet2'>
                                    <img className="wpDetail" src="https://img.icons8.com/color/512/whatsapp.png" alt="" />| Contactanos
                                </a>
                            </div>
                        </div> 
                    
                }
            })}
        </div>
    )
}

export default ItemDetail;