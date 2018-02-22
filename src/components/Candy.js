import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'
import * as actionTypes from '../store/actions'
import BuyButton from './BuyButton'

export class Candy extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.onInventoryListLoad()
  }

  render() {

      // let jarItems =  this.props.honey.filter((item) => {
      //     return item.type == "Jar"
      //   })


        let inventoryItems = this.props.honey.map((honey,index) => {
            if(honey.type == "Candy") {
            return (
            <div className= 'itemDiv' key = {honey.id}>
            <img src = {honey.image}/>
            <li> {honey.name} </li>
            <li> ${honey.price}</li>
            <li> {honey.description}</li>
              <BuyButton id={honey.id} onBuyClick = {() => this.props.onBuyItem(honey.id)}/>
          </div>)}
        })
    return(
      <div>
      <h1>Honey Jars Section</h1>

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

      <div className = 'inventoryContainer'>
        {inventoryItems}
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Candy)
