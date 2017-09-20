import React, { Component } from 'react'
import { About } from './About'
import { PropTypes } from 'prop-types' 

const CounterList = ( {counters, onIncrement, onDecrement}) => {
    const counterList = counters.map(
        (counter, i) => (
            <About
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        )
    );

    return (
        <div>
            {counterList}
        </div>
    )
}

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color : PropTypes.string,
        number : PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
}

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defind'),
    onDecrement: () => console.warn('onDecrement not defind')
}

export default CounterList;