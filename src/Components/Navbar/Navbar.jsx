import React from "react";
import { useSelector } from 'react-redux';
import "./Navbar.css";
import { Avatar, Button, Stack, Container } from "@mui/material";
import Box from "@mui/material/Box";
import { ShoppingCartOutlined } from '@mui/icons-material';

function Navbar() {
    const cart = useSelector((state) => state.cart);
    console.log("cart is in navbar>", cart);
    console.log("cart length is> ", cart.cartItems.length);
    return (
        <Box className="header navbar-container" justifyContent="space-between">
            <Box className="store-title">
                <div>Reek Store</div>
            </Box>
            <Stack direction="row" spacing={4} alignItems="center">
                <div>
                    Products
                </div>
                <div>
                    <div className='cart-icon'>
                        {
                            cart.cartItems.length ? <div className='cart-count'>{cart.cartItems.length}</div> : null
                        }
                        <ShoppingCartOutlined />
                    </div>
                </div>

            </Stack>
        </Box>

    )
}

export default Navbar