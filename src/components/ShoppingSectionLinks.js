import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ShoppingSectionLinks extends Component {

  render() {
    return (
      <div className = 'homeLinks'>
        <div className= 'homeShopLink'>
          <Link to = '/HoneyJars' style={{ color: 'white',textDecoration: 'none' }}> Shop Honey </Link>
        </div>

        <div className= 'homeShopLink'>
          <Link to = '/Candy' style={{ color: 'white', textDecoration: 'none' }}> Shop Candy </Link>
        </div>

        <div className= 'homeShopLink'>
          <Link to = '/Extras' style={{ color: 'white',textDecoration: 'none' }}> Shop Extras </Link>
        </div>
      </div>
    )
  }
}
