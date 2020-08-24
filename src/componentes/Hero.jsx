import React,{useEffect,useContext} from "react";
import Audifonos from '../img/audifonos.png'
import Audifonos2 from '../img/Audifonos2.png'
import bgInicio from "../img/fondo6.png";
import { TiendaContext } from "../componentes/TiendaProvider";
function Hero() {
  const [background, setBackground,,setIconColor] = useContext(TiendaContext);
  useEffect(() => {
    setIconColor(false)
    setBackground(bgInicio)
}, [])
  return (
    <section className="hero">
     <div className="contenedor">
     <article className="descripcion">
        <h2>SIENTE LA MUSICA DE UNA MANERA DIFERENTE</h2>
        <button className="btnVerMas">VER MAS</button>
      </article>
      <article className="audifonos">
          <img src={Audifonos} alt=""/>
      </article>

      <article className="audifonos2">
          <img src={Audifonos2} alt=""/>
      </article>
      <button className="btnVerMas2">VER MAS</button>
     </div>
    </section>
  );
}

export default Hero;
