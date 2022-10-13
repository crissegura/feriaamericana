import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Padministrador=()=>{
    return(
        <div style={{textAlign:'center',paddingTop:'10px'}} >
            <h3>Bienvenido admin</h3>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Link to='/nhuhehvho'>
                    <Button>
                        Crear nuevo producto
                    </Button>
                </Link>
                <Link to='/pvendidos' style={{margin:'5px'}}>
                    <Button>
                        Ver ventas
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Padministrador;