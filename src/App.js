import React, { Component } from 'react';
import './styles/App.css';
import './styles/BaseLayout.css';
import './styles/Home.css';
import './styles/ShopAll.css';
import { Home } from './components/Home'

class App extends Component {
  render() {
    return (
    <Home />
    );
  }
}

export default App;
