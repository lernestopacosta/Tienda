import React, { useEffect, useContext } from "react";
import { TiendaContext } from "../componentes/TiendaProvider";
import bgTienda from "../img/fondoTienda.png";
import carrito from "../img/CarritoBlanco.png";
import useFireStore from '../hooks/useFirestore'
function Tienda() {

  const {docs}=useFireStore('productos')
  
  const [, setBackground, , setIconColor] = useContext(TiendaContext);

  useEffect(() => {
    setBackground(bgTienda);
    setIconColor(true);
  }, [setBackground, setIconColor]);

 
  return (
    <section className="Tienda">
      <div className="contenedor">
        {
                   docs.map(producto=>(
                  
                    <article key={producto.id} className="producto">
                    <div className="imagen">
                    <img src={producto.foto} alt=""/>
                    </div>
                    <div className="texto">
                   <p className="nombre">{producto.nombre}</p>
                   <p className="precio"><span>Precio:</span> {producto.precio} RD$</p>
                   <p className="cantidad"><span>Cantidad:</span> {producto.cantidad} </p>
                        <button className="btnAgregar">Agregar <img  src={carrito} alt=""/> </button>
                    </div>
                </article>
                   ))
              
                }


      </div>
    </section>
  );
}

export default Tienda;
