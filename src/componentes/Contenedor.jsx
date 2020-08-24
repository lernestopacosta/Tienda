import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Socials from "./Socials";
import Tienda from "./Tienda";
import styled from "styled-components";
import { TiendaContext } from "../componentes/TiendaProvider";
import BurgerMenu from "./BurguerMenu";

function Contenedor() {
  const [background,,,,burger, ] = useContext(TiendaContext);

  const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    width: 100%;
  
    position: relative;
  `;
  return (
    <>
    
      <Container>
        
        <Router>
     { burger ? <BurgerMenu/>:null}
   
          <div className="contenedor">
            <Header />
            <Socials />
          </div>
          <Route path="/" exact component={Hero} />
          <Route path="/tienda" component={Tienda} />
        </Router>
      </Container>
    </>
  );
}

export default Contenedor;
