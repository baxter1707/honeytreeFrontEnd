import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export class Header extends Component {
  render (){
    return(
      <div className = 'headerBar'>

        <div className = 'headerLogo'>
          <span className= 'headerTitle'> Honey Tree </span>
        </div>

        <div>
          <Link to = '/' > Home </Link>
        </div>

        <div>
          <Link to = '/ShopAll' > Shop </Link>
        </div>

        <div>
          <Link to = '/AboutUs' > About Us </Link>
        </div>

      </div>
    )
  }
}


export class Footer extends Component {

  render() {
    return (
      <h1>Footer</h1>
    )
  }
}
