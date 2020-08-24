import React,{useState,useEffect,createContext} from 'react'



export const TiendaContext = createContext();

function TiendaProvider({children}) {

    const [background, setBackground] = useState();
    const [iconColor, setIconColor] = useState(true);
    const [burger, setburger] = useState(false);

 
    return (
        <TiendaContext.Provider value={[background,setBackground,iconColor,setIconColor,burger, setburger]}>
            {children}
        </TiendaContext.Provider>
    )
}

export default TiendaProvider
