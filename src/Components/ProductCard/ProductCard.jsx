import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
//import { CartState } from '../context/context'
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from '../../redux/actions';
import "./ProductCard.css"

const ProductCard = ({ productInfo }) => {
    const { name, imageURL, price, gender, quantity, color, id } = productInfo;

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // const { state: { cart }, dispatch } = CartState()
    //  const navigate = useNavigate()

    // const handleAddToCart = (product) => {
    //     dispatch({
    //         type: "addToCart",
    //         payload: product
    //     })

    // }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const isItemInCart = cart.cartItems.some((p) => p.id === id);
    const cartItem = cart.cartItems.find((item) => item.id === id);

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
                                >
                                    <ShoppingBagOutlined className="shopping-bag-icon" />
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
                    {/* // cart.some((p) => p.id === id) ? (
                        //     <button
                        //         className="checkout"
                        //     // onClick={() => navigate('/cart')}
                        //     >
                        //         Checkout
                        //     </button>
                        // ) : (
                        //     <button
                        //         disabled={!quantity ? true : false}
                        //         onClick={() => handleAddToCart(productInfo)}
                        //     >
                        //         Add to Cart
                        //     </button>
                        // ) */}
                    {/* } */}
                </div>


            </div>
        </div>
    )
}

export default ProductCard