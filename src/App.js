import React from "react";
import "./App.scss";
import Contenedor from "./componentes/Contenedor";
import TiendaProvider from "./componentes/TiendaProvider";
function App() {
  return (
    <TiendaProvider>
      <Contenedor />
    </TiendaProvider>
  );
}

export default App;
