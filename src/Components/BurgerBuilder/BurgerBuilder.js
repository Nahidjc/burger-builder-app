import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalPrice: 80,
        modalOpen: false,
    }


    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) {
                item.amount++;
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
    }
    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }

        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    render() {
        return (

            <div >
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                    ></Controls>

                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.state.ingredients}></Summary>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleModal}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

};
