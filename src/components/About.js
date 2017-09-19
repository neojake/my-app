import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page!!</h1>
                <Value number={this.props.number} />
                <Control onPlus={this.props.action.increment} onSubtract={this.props.action.decrement} />
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        number : state.counter.number        
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        action: bindActionCreators(actions, dispatch)
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(About);       