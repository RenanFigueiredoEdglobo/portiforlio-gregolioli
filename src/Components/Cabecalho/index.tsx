import React from "react";
import styled from "styled-components";


const Topo = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #b61f2c;
    align-items: center;
    box-shadow: 5px 5px  #8b232cd2;
    border-radius: 20px;
    transition: all 0.5s ease-out;
    width: 100%;
    height: 60px;
    font-family: 'My Soul', cursive;
    font-family: 'Oswald', sans-serif;
    color: #FFFF;  
`;
const MenuCabecalho = styled.nav`
   float: none;
   text-align: left;
   margin-left: 10px;  
`;
const MenuLink = styled.a`
    color: #FFFF;
    font-size: 1.5em;
    border: 10px solid #0b45f3;
    background-color: #0b45f3;
    border-radius: 14px;
    margin: 2px;
    box-shadow: 4px 4px #0b45f3cc;
    width: auto;
    height: 40px;
    @media screen and (max-width:1000px){
        display: none;
    }
`;
const MenuLateral = styled.nav`
    
    @media screen and (min-width:1001px){
        display: none;
    }
`;
const Cabecalho = () =>{
   return(
    <>
    <Topo id="cabecalho" className="cabecalho">
        <MenuCabecalho id="menu-cabecalho" className="menu-cabecalho">
            <MenuLink id="menu-link" className="menu-link menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo" href="/">Home</MenuLink>
            <MenuLink id="menu-link" className="menu-link menu-lateral__link menu-lateral__link--PortifolioDesign" href="portifolio-design">Portifólio Design</MenuLink>
        </MenuCabecalho>

        <MenuLateral id="menu-lateral" className="menu-lateral">
            <MenuLink id="menu-link" className="menu-link menu-lateral__link menu-lateral__link--inicio menu-lateral__link--ativo" href="/">Home</MenuLink>
            <MenuLink id="menu-link" className="menu-link menu-lateral__link menu-lateral__link--PortifolioDesign" href="portifolio-design">Portifólio Design</MenuLink>
        </MenuLateral>
    </Topo>
    </>
   )

};
export default Cabecalho;