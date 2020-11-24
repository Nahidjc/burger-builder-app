import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 1 },
            { type: 'cheese', amount: 1 },
            { type: 'meat', amount: 2 }
        ]
    }


    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        for (let item of ingredients) {
            if (item.type === type) {
                item.amount++;
            }
            this.setState({ ingredients: ingredients });
        }
    }
    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return
                item.amount--;
            }
            this.setState({ ingredients: ingredients });
        }
    }
    render() {
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients}></Burger>
                <Controls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved={this.removeIngredientHandle}
                ></Controls>
            </div>
        );
    }

};
