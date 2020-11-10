import React from 'react';
import '../App.css';
import styled from 'styled-components';

const TextoPromo = styled.div`
  font-size: 50px;
  margin-top: 0;
  
  .imgGif {
    width: 60px;
    margin-top: -3px;
  }
`

const Titulo = ({nome, titulo}) => {
  return (
    <div className="texto-titulo">
        <TextoPromo className="">
        {nome} <strong className="texto-azul">{titulo}<img src="img/ecom-cart.gif" alt="gif-compra" className="imgGif"/></strong>
        
        </TextoPromo>
        
    </div>
  );
}

export default Titulo;
