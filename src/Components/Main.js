import React from 'react';
import { Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './Orders/Checkout/Checkout';
import Orders from './Orders/Orders';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Route path="/orders" component={Orders} />

                <Route path="/checkout" component={Checkout} />

                <Route path="/login" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />



            </div>

        </div>
    );
};

export default Main;