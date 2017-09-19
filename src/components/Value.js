import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number : PropTypes.number
};

const defaultProps = {
    number : -1
}

class Value extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                {this.props.number}
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;