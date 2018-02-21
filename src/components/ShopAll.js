import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'

export class ShopAll extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onInventoryListLoad()
  }

  render() {
    let inventoryItems = this.props.honey.map((honey,index) => {
      return <div className= 'itemDiv' key = {honey.id}>
        <img src = {honey.image}/>
        <li> {honey.name} </li>
        <li> ${honey.price}</li>
        <li> {honey.description}</li>
      </div>
    })

    return (
      <div>
        <h1>View All Honey</h1>
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
        <div className = 'inventoryContainer'>
          {inventoryItems}
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    honey : state.honey
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onInventoryListLoad : () => dispatch(loadHoneyInventory())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopAll)
