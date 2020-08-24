import React,{useContext} from 'react'
import { TiendaContext } from "../componentes/TiendaProvider";
import FB from '../img/FB.png'
import TW from '../img/TW.png'
import IG from '../img/IG.png'
import FBblanco from '../img/FBblanco.png'
import TWBlanco from '../img/TWBlanco.png'
import IGBlanco from '../img/IGBlanco.png'
import styled from 'styled-components'

const Section=styled.section`
/* background-color:red; */
display:flex;
flex-direction:column;
float:right;
margin-top:10px;

@media (max-width:768px) {
    
display:none;
}


a{
    border-radius:50%;
    margin-bottom:0.7rem;
    padding: 0.4rem;
    display:flex;
    justify-content:center;
    &:hover{
        background-color:#ff5b25;
        
    }
}

`

function Socials() {
    const [,,iconColor] = useContext(TiendaContext);
  
   
    return (
       <Section>
          
            <a href="#"> <img src={iconColor?FBblanco:FB} alt=""/></a>
            <a href="#"><img src={iconColor?IGBlanco:IG} alt=""/></a>
            <a href="#"><img src={iconColor?TWBlanco:TW} alt=""/></a>
        </Section>
        
    )
}

export default Socials


