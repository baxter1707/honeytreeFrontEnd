import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ShoppingSectionLinks extends Component {

  render() {
    return (
      <div className = 'shoppingSections'>

        <div>
          <Link to = '/HoneyJars' > Honey Jars </Link>
        </div>

        <div>
          <Link to = '/Candy' > Candy </Link>
        </div>

        <div>
          <Link to = '/Extras' > Extras </Link>
        </div>

      </div>
    )
  }
}
