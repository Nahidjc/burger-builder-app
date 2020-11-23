import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Burger = () => {
    return (
        <div>
            <Ingredient type="bread-top"></Ingredient>
            <Ingredient type="salad"></Ingredient>
            <Ingredient type="cheese"></Ingredient>
            <Ingredient type="meat"></Ingredient>
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
    );
};

export default Burger;