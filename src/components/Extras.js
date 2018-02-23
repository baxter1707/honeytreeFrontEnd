import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'
import * as actionTypes from '../store/actions'
import BuyButton from './BuyButton'
import {ShoppingSectionLinks} from './ShoppingSectionLinks'

export class Extras extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onInventoryListLoad()
  }

  render() {


        let inventoryItems = this.props.honey.map((honey,index) => {
            if(honey.type == "Extras") {
            return (
            <div className= 'itemDiv' key = {honey.id}>
            <img src = {honey.image}/>
            <li> {honey.name} </li>
            <li> ${honey.price}</li>
            <li> {honey.description}</li>
              <BuyButton id={honey.id} onBuyClick = {() => this.props.onBuyItem(honey.id, honey.name, honey.price, honey.description)}/>
          </div>)}
        })
    return(
      <div>
      <h1>Honey Jars Section</h1>

      <ShoppingSectionLinks />


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

    onBuyItem : (key,name, price,desc) => dispatch({type : actionTypes.BUY_ITEM, key : key, name: name, price: price, desc: desc})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Extras)
