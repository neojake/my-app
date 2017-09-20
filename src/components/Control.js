import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus : PropTypes.func,
    onSubtract : PropTypes.func
}

function createWarning(funcname) {
    return () => console.log(`${funcname} is not defined`);
}

const defaultProps = {
    onPlus : createWarning('onPlus'),
    onSubtract : createWarning('onSubtract')
}

class Control extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>                
            </div>
        );
    }
}


Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;