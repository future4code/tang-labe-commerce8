import React from 'react';
import './App.css';
import Titulo from './components/Titulo'
import { Filters } from './components/Filters/Filters';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { Products } from './components/Products/Products';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  padding: 4px;
  gap: 55px;
`;


const AppWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 100px;
`

const CartFAB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: var(--mainVerde);
  border-radius: 50%;
  box-shadow: 0 0 5px #00000059;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  color: white;
  
  > .carrinho {
    padding:3px;
    width: 100%;
    height: 35%;
  }
  
 :hover {
    box-shadow: 0 0 10px #00000059;
    color: rgb(70, 70, 70);
    border: none;
 }
`
const products = [
  {
    id: 1,
    name: 'Camiseta Alien',
    price: 149,
    photo: 'img/produto01.jpg'
  },
  {
    id: 2,
    name: 'Camiseta Flying',
    price: 125,
    photo: 'img/produto02.jpg'
  },
  {
    id: 3,
    name: 'Bermuda Alien',
    price: 69,
    photo: 'img/produto03.jpg'
  },
  {
    id: 4,
    name: 'Pijama Nasa',
    price: 100,
    photo: 'img/produto04.jpg'
  },
  {
    id: 5,
    name: 'Pijama Espacial',
    price: 100,
    photo: 'img/produto05.jpg'
  },
  {
    id: 6,
    name: 'Pijama University',
    price: 105,
    photo: 'img/produto06.jpg'
  },
  {
    id: 7,
    name: 'Boné Nasa',
    price: 110,
    photo: 'img/produto07.jpg'
  },
  {
    id: 8,
    name: 'Boné Foguete',
    price: 89,
    photo: 'img/produto08.jpg'
  },
  {
    id: 9,
    name: 'Short Nasa',
    price: 49,
    photo: 'img/produto09.jpg'
  }
]

class Filtro extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [

    ]
  }

  toggleCartVisibility = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    })
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return ( 
      <div className="container">
      <Titulo nome="black" titulo="friday"/>
        <AppContainer>
          <Filters
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onChangeMinFilter={this.onChangeMinFilter}            
            onChangeMaxFilter={this.onChangeMaxFilter}            
            onChangeNameFilter={this.onChangeNameFilter}  
          />
          <Products 
            products={products}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onAddProductToCart={this.onAddProductToCart}
          />
        <AppWrapper cartIsVisible={this.state.isCartVisible}>
        {this.state.isCartVisible && (
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />

        )}
        <CartFAB onClick={this.toggleCartVisibility}>
          <span className="carrinho"><i className="fa fa-cart-plus" aria-hidden="true" /> carrinho</span>
        </CartFAB>
      </AppWrapper>
        
        </AppContainer>

      </div>
    );
  }
}

export default Filtro;
