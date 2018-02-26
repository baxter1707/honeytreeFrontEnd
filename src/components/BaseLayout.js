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
          <div className = 'honeyTreeImageDiv'>
          <img className = 'honeyTreeImage' src="http://i68.tinypic.com/8wxx68.png" />
          </div>
          <span className= 'headerTitle'>The Honey Tree </span>
        </div>

        <div className = 'headerLink'>
          <Link to = '/' style={{ textDecoration: 'none' }} > Home </Link>
        </div>

        <div className = 'headerLink'>
          <Link to  = '/ShopAll' style={{ textDecoration: 'none' }} > Products </Link>
        </div>

        <div className = 'headerLink'>
          <Link to = '/AboutUs' style={{ textDecoration: 'none' }}> About Us </Link>
        </div>

      </div>
    )
  }
}


export class Footer extends Component {

  render() {
    return (
      <div className = 'footerBar'>
          <div className = 'footerTitle'>
          <span> 2018 The Honey Tree</span>
          </div>

          <div className = 'footerTitle'>
          <span> Privacy | Terms </span>
          </div>
      </div>
    )
  }
}
