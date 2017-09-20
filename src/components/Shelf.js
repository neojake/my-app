import React, { Component } from 'react'


export default class Shelf extends Component {
    constructor(props) {
        super(props);
        this.onAddItemToCart = this.onAddItemToCart.bind(this);        
    }

    onAddItemToCart(item) {
        this.props.addItem(item);
    }

    render() {

        const shopList = [
            'shampoo',
            'chocolate',
            'yogurt'
        ]

        const shelfItems = shopList.map((item, idx) => {
            return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}</li>
        });

        return (
            <div>
                <h2>Shelf</h2>
                <ul>
                    {shelfItems} 
                </ul>                
            </div>
        )
    }
}
