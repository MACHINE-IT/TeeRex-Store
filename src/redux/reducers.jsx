// cartReducer.js
import { combineReducers } from 'redux';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
} from '../redux/actions';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === product.id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...product, quantity: 1 }],
                };
            }
        }
        case REMOVE_FROM_CART: {
            const productId = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== productId),
            };
        }
        case INCREMENT_QUANTITY: {
            const productId = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        case DECREMENT_QUANTITY: {
            const productId = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;