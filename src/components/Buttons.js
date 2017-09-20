import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div>
            <Button onClick={onCreate}>생성</Button>
            <Button onClick={onRemove}>제거</Button>
        </div>
    );
};

Buttons.PropTypes = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;