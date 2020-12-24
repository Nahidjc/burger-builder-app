import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Auth/Auth';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Checkout from './Orders/Checkout/Checkout';
import Orders from './Orders/Orders';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Main = props => {

    let routes = null;
    if (props.token === null) {
        routes = (
            <Switch>
                <Route path="/login" component={Auth} />
                <Redirect to="/login" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/orders" component={Orders} />

                <Route path="/checkout" component={Checkout} />

                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                {routes}

            </div>

        </div>
    );
};

export default connect(mapStateToProps)(Main);