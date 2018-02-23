import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'
import * as actionTypes from '../store/actions'
import {store} from '../index.js'
import Checkout from './Checkout'
import {ShoppingSectionLinks} from './ShoppingSectionLinks'

export class BuyScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onInventoryListLoad()
  }

  render() {

console.log(this.props)


        let inventoryItems = this.props.honey.map((honey,id) => {
            if(honey.id == this.props.id) {
            return (
            <div className= 'itemDiv' key = {honey.id}>
            <img src = {honey.image}/>
            <li> {honey.name} </li>
            <li> ${honey.price}</li>
            <li> {honey.description}</li>
          </div>)}
        })
    return(
      <div>
          <h1>Buy Screen</h1>

          <ShoppingSectionLinks />


            <div className = 'inventoryContainer'>
              {inventoryItems}
            </div>



        <div className = 'checkoutSection'>
          <Checkout
            name = {this.props.name}
            amount = {this.props.price}
            />

        </div>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    honey : state.honey,
    id : state.id,
    price : state.price,
    desc : state.desc,
    name: state.name
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onInventoryListLoad : () => dispatch(loadHoneyInventory())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuyScreen)
