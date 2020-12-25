import axios from 'axios';
import *as actionTypes from './actionTypes';
export const addIngredient = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,

    }
}
export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,

    }
}
export const updateIngredient = () => {
    return {
        type: actionTypes.UPDATE_INGREDIENT,

    }
}
export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}
export const orderLoadFailed = orders => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://rimi-burger-shop.firebaseio.com/orders.json?auth=' + token + queryParams)
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}