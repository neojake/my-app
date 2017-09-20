import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cart'
import Shelf from './Shelf'
import Bag from './Bag'

class Cart extends Component {
    
    render() {            

        return (
            <div>
                <Shelf addItem={this.props.action.addToCart} />
                <Bag bags={this.props.bags} delItem={this.props.action.delToBags} />
            </div>
        )
    }
}

function mapStateToProps(state, props) {

    return {
        bags: state.bags        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);