import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { addIngredient, removeIngredient, updateIngredient } from '../../redux/actionCreators';


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updateIngredient: () => dispatch(updateIngredient()),
    }
}

class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }
    addIngredientHandle = type => {

        this.props.addIngredient(type);
        this.props.updateIngredient();
    }


    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updateIngredient();
    }


    handleCheckout = () => {
        this.props.history.push("/checkout")
    }


    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    };


    render() {
        return (

            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients}></Burger>
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable}
                    ></Controls>

                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients}></Summary>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);