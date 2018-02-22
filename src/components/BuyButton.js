import React, { Component } from 'react';
import {Link} from 'react-router-dom'


const BuyButton = (props) => (

    <Link to = '/BuyScreen' >
    <button id={props.id} onClick={props.onBuyClick} >BUY</button>
    </Link>
)

export default BuyButton
