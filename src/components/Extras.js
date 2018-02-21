import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHoneyInventory} from '../store/actions'

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
          </div>)}
        })
    return(
      <div>
      <h1>Honey Jars Section</h1>

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

export default connect(mapStateToProps,mapDispatchToProps)(Extras)
