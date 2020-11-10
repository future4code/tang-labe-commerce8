import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components';
import '../../App.css'

const ShoppingCartContainer = styled.div`
  border: none;
  padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <h3 className="corTexto">Meu Carrinho: </h3>
      <CartListContainer className="corTexto">
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p className="corTexto">Valor total: R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
  }
}
