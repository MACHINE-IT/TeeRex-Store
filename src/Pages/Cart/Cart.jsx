import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../../redux/actions";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import EmptyCartSVG from "../../Assets/EmptyCartSVG";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems: cart } = useSelector((state) => state.cart);

    const handleDeleteItem = (quantity, itemId) => {
        quantity <= 1
            ? dispatch(removeFromCart(itemId))
            : dispatch(decrementQuantity(itemId));
    };

    const handleAddItem = (itemId) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleCartTotalAmount = (cart) => {
        return cart.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    return (
        <div className="cart-home-container">
            <div className="cart-items">
                {cart.length ? (
                    cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            handleDeleteItem={handleDeleteItem}
                            handleAddItem={handleAddItem}
                            handleRemoveItem={handleRemoveItem}
                        />
                    ))
                ) : (
                    <div className="empty-cart">
                        <EmptyCartSVG />
                        <div className="empty-cart-tagline">
                            <div>Your TeeRex cart is empty!</div>
                            <Button className="empty-cart-btn" onClick={() => navigate("/")}>
                                Continue Shopping
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            {cart.length > 0 && <TotalAmount totalAmount={handleCartTotalAmount(cart)} />}
        </div>
    );
};

export default Cart;
