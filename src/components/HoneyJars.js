import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'
import {Link} from 'react-router-dom'
import * as actionTypes from '../store/actions'
import BuyButton from './BuyButton'
import {ShoppingSectionLinks} from './ShoppingSectionLinks'

export class HoneyJars extends Component {
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
            if(honey.type == "Jar") {
            return (
            <div className= 'itemDiv' key = {honey.id}>
            <img src = {honey.image}/>
            <li className = 'productName'> {honey.name} </li>
            <li className= 'productDescription'> {honey.description}</li>
              <BuyButton id={honey.id} onBuyClick = {() => this.props.onBuyItem(honey.id, honey.name, honey.price, honey.description)}/>
          </div>)}
        })
    return(
      <div>
      <div className='allProductsBannerImage'>
        <div className='allProductsBannerContainer'>
          <div className = 'allProductsTextContainer'>
            <div className= 'allProductsHeader'>
              <span>Honey</span>
            </div>
          </div>
        </div>

          <div>
            <ShoppingSectionLinks />
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

    onBuyItem : (key,name, price,desc) => dispatch({type : actionTypes.BUY_ITEM, key : key, name: name, price: price, desc: desc})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HoneyJars)
