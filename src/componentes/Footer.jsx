import Admin from './Admin';

const Footer =()=>{

    return(
        <>
            <p className='footer'>
                <Admin/>
                Solicitá tu web <a style={{color:'black',textDecoration:'none'}} href="https://cristiansegura.netlify.app/" target='-'> - https://cristiansegura.netlify.app/ </a>
            </p>
        </>
    )

}

export default Footer;