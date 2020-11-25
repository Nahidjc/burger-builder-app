import React from 'react';
import { Route } from 'react-router';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './Orders/Checkout/Checkout';
import Orders from './Orders/Orders';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Route path="/orders">
                    <Orders></Orders>
                </Route>
                <Route path="/checkout">
                    <Checkout></Checkout>
                </Route>
                <Route
                    path="/" exact>
                    <BurgerBuilder></BurgerBuilder>
                </Route>

            </div>

        </div>
    );
};

export default Main;