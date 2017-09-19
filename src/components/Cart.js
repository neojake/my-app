import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cart'
import Shelf from './Shelf'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {}    
    }

    
    render() {
        
        const CartItems = this.props.cart.map((item, idx) => {
            return <li key={idx}>{item} <button>[-]</button></li>
        });

        return (
            <div>
                <Shelf addItem={this.props.action.addToCart} />
                <h2>Shopping Bag</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);