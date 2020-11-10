import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Filtro from './Filtro'
import Contato from './components/Contato'
import Navbar from './components/Navbar'
import Error from './components/Error'


class App extends React.Component {
  render() {
    return ( 
      <div className="container">
        <Navbar />      
        <Switch>
        <Route exact path="/" component={Filtro}></Route>
        <Route path="/contato" component={Contato}></Route>
        <Route component={Error}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
