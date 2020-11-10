import React, { Component } from 'react';
import logo from '../labcommerce.png'
import { Link } from 'react-router-dom'
import '../App.css';


class Navbar extends Component {
  render() {
    return (
    <div>
      <div className="header">
      <img src={logo} alt="logo-loja" className="img-logo" />
        <div className="header-right">
        <Link to="/">
          <h4 className="compras">Produtos</h4>
        </Link>
          
        <Link to="/contato">
          <h4 className="compras">Contato</h4>
        </Link>
        {/* <Link to="/contato">
          <h4 className="compras"><span className="iconCarrinho"><i className="fa fa-cart-plus" aria-hidden="true" /></span>Carrinho</h4>
        </Link> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;