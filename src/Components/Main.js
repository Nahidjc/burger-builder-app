import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <BurgerBuilder></BurgerBuilder>
            </div>

        </div>
    );
};

export default Main;