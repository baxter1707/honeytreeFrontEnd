import React, { Component } from 'react';
import {ShoppingSectionLinks} from './ShoppingSectionLinks'
import {Link} from 'react-router-dom'

export class Home extends Component {

  render() {
    return (
      <div className = 'mainHomeContainer'>
        <div className = "homePage">
          <div className = 'homeTextContainer'>
            <div className= 'homeHeader'>
              <span> Inspired By Honeybees </span>
            </div>
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
          </div>
        </div>
      </div>
    )
  }

}
