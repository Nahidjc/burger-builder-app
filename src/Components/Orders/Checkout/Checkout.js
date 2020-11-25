import { Button } from 'reactstrap';
import React, { Component } from 'react';

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
                    <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto">Place Order</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack} >Cancel</Button>
                </form>

            </div >
        );
    }

};

export default Checkout;