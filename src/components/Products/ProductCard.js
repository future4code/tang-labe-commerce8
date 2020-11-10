import React from 'react'
import styled from 'styled-components';

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardsContainer>
    <Cards>
    <div className="img-container">
    <div className="img-container">
      <img src={product.photo} alt="produto" className="card-img-top" />
    </div>
        <br/>
        <span>{product.name}</span>
        <span> - R${product.price},00</span>
        <br/><br/><br/>
        <button  className="card-btn" onClick={() => this.props.onAddProductToCart(product.id)}>
          COMPRAR
        </button>
        </div>
      </Cards>
    </CardsContainer>
  }
}

const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

.card-img-top{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.img-container{
  position: relative;
  overflow: hidden;
}

.img-container:hover .card-img-top{
  transform: scale(1.2);
}

.card-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--mainVerde);
  border: none;
  color: #FFF;
  font-size: 1.0rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 0.4s linear;
  outline: none
}

.img-container:hover .card-btn {
  transform: translate(0, 0);
}

.card-btn:hover {
  color:  rgb(210, 210, 210);
  cursor: pointer;
}
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    min-width: 250px;
    padding: 0px 1px 1px;
    background-color: var(--mainPreto);
    color: var(--mainBranco);
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid var(--mainPreto);
    text-align: center;
    margin: 10px;
`