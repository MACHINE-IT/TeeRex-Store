import React from 'react';
import { ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
} from '../../redux/actions';
import "./ProductCard.css"

const ProductCard = ({ productInfo }) => {
    const { name, imageURL, price, gender, quantity, color, id } = productInfo;

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const isItemInCart = cart.cartItems.some((p) => p.id === id);
    const cartItem = cart.cartItems.find((item) => item.id === id);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={imageURL} alt={name} className='hide-bg' />
            </div>
            <div className='product-details'>{name} for {gender}
                <span>{color}</span>
            </div>
            <div className='card-footer'>
                <div className='price'>&#8377;{price}
                    {
                        !quantity ?
                            <span className='out'>Out of Stock</span> :
                            <span>Only {quantity} in stock</span>
                    }
                </div>
                <div className="card-button">
                    {
                        isItemInCart ? (
                            <div className='cart-actions'>
                                <button
                                    className='checkout'
                                    onClick={() => navigate("/cart")}
                                >
                                    <ShoppingCartOutlined className="shopping-bag-icon" />
                                    GO TO BAG
                                </button>
                            </div>
                        ) : (
                            <div className='cart-actions'>
                                <button
                                    disabled={!quantity || !quantity > 0}
                                    onClick={() => handleAddToCart(productInfo)}
                                >
                                    <ShoppingBagOutlined className="shopping-bag-icon" />
                                    ADD TO BAG
                                </button>
                            </div>
                        )
                    }
                </div>


            </div>
        </div>
    )
}

export default ProductCard