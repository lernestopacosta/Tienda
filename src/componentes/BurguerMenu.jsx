import React,{useContext} from 'react'
import FBblanco from '../img/FB.png'
import TWBlanco from '../img/TW.png'
import IGBlanco from '../img/IG.png'
import carritoB from '../img/CarritoBlanco.png'
import lupaB from '../img/LupaBlanco.png'
import {Link }from 'react-router-dom'
import { TiendaContext } from "../componentes/TiendaProvider";

function BurgerMenu() {
    const [,,,,, setburger] = useContext(TiendaContext);
    return (
        <section>
            <nav className="BurgerMenu">
                <div className="menu">
                <Link onClick={()=>setburger(false)} to={{ pathname:"/"}}>Inicio</Link>
                <Link to="#">Blog</Link>
                <Link onClick={()=>setburger(false)} to={{ pathname:"tienda"}}>Tienda</Link>
                <Link to="#">Contacto</Link>
                </div>

                <article className="compras">
                    <button><img src={carritoB} alt=""/></button>
                    <button><img src={lupaB} alt=""/></button>
                </article>

                <article className="socials">
                    <a className="socialIcon" href="#"> <img src={FBblanco} alt=""/></a>
                    <a className="socialIcon" href="#"><img src={IGBlanco} alt=""/></a>
                    <a className="socialIcon" href="#"><img src={TWBlanco} alt=""/></a>
                </article>
            </nav>
            
        </section>
    )
}

export default BurgerMenu
