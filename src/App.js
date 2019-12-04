import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios'
import Home from './Components/Home';
import Header from './Components/Header';

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: []
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        {routes}
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home {...props} products={this.state.products}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
