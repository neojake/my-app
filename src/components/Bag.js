import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    bags: PropTypes.array
}

const defaultProps = {
    bags: []
}

class Bag extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const CartItems = this.props.bags.map((item, idx) => {
            return <li key={idx}>{item}</li>
        });

        return (
            <div>
                <h2>Shopping Bag</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

Bag.propTypes = propTypes;
Bag.defaultProps = defaultProps;

export default Bag