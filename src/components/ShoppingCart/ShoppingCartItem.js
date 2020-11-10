import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;

  p {
    margin: 2px;
  }
  .btnRemove {
  position: absolute;
  background: var(--mainVerde);
  border: none;
  color: #FFF;
  border-radius: 0.2rem;
  transform: translate(230%, 10%);
  transition: all 0.4s linear;
  outline: none;
  cursor: pointer;
  }
`


export class ShoppingCartItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.cartItem.quantity}x</p>
      <p>{this.props.cartItem.name}</p>
      <button className="btnRemove" onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>remover</button>
    </ItemContainer>
  }
}
