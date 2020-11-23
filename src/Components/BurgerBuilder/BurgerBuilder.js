import React, { Component } from 'react';
import Burger from './Burger/Burger';

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 1 },
            { type: 'cheese', amount: 1 },
            { type: 'meat', amount: 2 }
        ]
    }
    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}></Burger>
            </div>
        );
    }

};
