import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <BurgerBuilder></BurgerBuilder>
        </div>
    );
};

export default Main;