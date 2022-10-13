import { Button } from "react-bootstrap";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const Ingresar =()=>{

    const navigate = useNavigate();
    const [user,setUser]=useState([])
    const [pass,setPass]=useState([])

    const getUser=({target})=>{
        setUser(target.value)
    }

    const getPass=({target})=>{
        setPass(target.value)
    }

    const entrar=()=>{
        if(user==='admin'&&pass==='#ccbanfield'){
            navigate("/padministrador", { replace: false });
        }else{
            alert('No pudiste ingresar. Solo Administradores.')
        }
    }

    return(
        <div style={{textAlign:'center',paddingTop:'20px'}}>  
            <label>Usuario</label><br />
            <input type="text" value={user} onChange={getUser} name='user' />
            <br />
            <br />
            <label>Contraseña</label><br />
            <input type="password" value={pass} onChange={getPass} name='pass'/><br />
            <br />
            <Button onClick={entrar} >
                Ingresar
            </Button>
        </div>
    )
}

export default Ingresar;