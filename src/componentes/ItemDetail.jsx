
const ItemDetail = ({item}) =>{

    return(
        <div className="contenedorDetalle" key={item.id}>
                <div className="">
                    <img className="imgDetail" src='' />
                </div>
                <div className="content">
                    <h3 style={{fontSize:'30px'}}> {item.nombre} </h3> 
                    <br />
                    <p style={{fontSize:'20px'}} ></p>
                    <br />
                    <b style={{fontSize:'20px'}}></b>
                </div>
        </div>
    )
}

export default ItemDetail;