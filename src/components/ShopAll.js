import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'
import * as actionTypes from '../store/actions'
import BuyButton from './BuyButton'

export class ShopAll extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onInventoryListLoad()
  }

  // onBuyClick = (event) => {
  // let id= event.target.getAttribute('id')
  // console.log(id)
  // }

  render() {
    let inventoryItems = this.props.honey.map((honey) => {
      return <div className= 'itemDiv' key = {honey.id}>
        <img src = {honey.image}/>
        <li> {honey.name} </li>
        <li> ${honey.price}</li>
        <li> {honey.description}</li>
        <BuyButton id={honey.id} onBuyClick = {() => this.props.onBuyItem(honey.id)}/>
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
    honey : state.honey,
    id : state.id
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onInventoryListLoad : () => dispatch(loadHoneyInventory()),

    onBuyItem : (key) => dispatch({type : actionTypes.BUY_ITEM, key : key})

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopAll)
