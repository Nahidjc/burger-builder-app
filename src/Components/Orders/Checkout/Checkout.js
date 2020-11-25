import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        }
    }
    goBack = () => {
        this.props.history.goBack("/");
    }
    submitHandler = () => {
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),

        }
        axios.post("https://rimi-burger-shop.firebaseio.com/orders.json", order)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        console.log(order);
    }

    inputChangerHandler = e => {
        this.setState(
            {
                values: {
                    ...this.state.values,
                    [e.target.name]: e.target.value,
                }
            }
        )
    }
    render() {
        return (
            <div>
                <h4
                    style={{
                        border: "1px solid grey",
                        boxShadow: "1px 1px #888888",
                        borderRadius: "5px",
                        padding: "20px",
                    }}
                >Payment: {this.props.totalPrice} BDT</h4>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }}>
                    <textarea name="deliveryAddress" placeholder="Your Address" value={this.state.values.deliveryAddress} onChange={(e) => this.inputChangerHandler(e)} className="form-control"></textarea><br />
                    <input name="phone" placeholder="Your Phone Number" className="form-control" value={this.state.values.phone} onChange={(e) => this.inputChangerHandler(e)} /><br />
                    <select name="paymentType" className="form-control" value={this.state.values.phone} onChange={(e) => this.inputChangerHandler(e)}>
                        <option value="Cash on Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select><br />
                    <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack} >Cancel</Button>
                </form>

            </div >
        );
    }

};

export default connect(mapStateToProps)(Checkout);