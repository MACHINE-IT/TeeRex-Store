import React from "react";
import { IconButton, Stack } from "@mui/material";
import { AddOutlined, RemoveOutlined, CancelOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import "./Cart.css"

const CartItem = ({ item, handleDeleteItem, handleAddItem, handleRemoveItem }) => {
    return (
        <div className="cart-item-container">
            <div className="cart-item-details">
                <div className="image-and-name">
                    <img
                        src={item.imageURL}
                        height="100px"
                        width="100px"
                        alt={item.name}
                    />
                    <div className="cart-item-info">
                        <div>{item.name}</div>
                        <div>&#8377;{item.price}</div>
                    </div>
                </div>
                <div className="quantity-and-remove">
                    <Stack direction="row" alignItems="center" className="cart-item-actions">
                        <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleDeleteItem(item.quantity, item.id)}
                        >
                            <RemoveOutlined />
                        </IconButton>
                        <Box padding="0.5rem">{item.quantity}</Box>
                        <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleAddItem(item.id)}
                        >
                            <AddOutlined />
                        </IconButton>
                    </Stack>
                    <CancelOutlined
                        className="product-cancel-button"
                        style={{ display: "none" }}
                        onClick={() => handleRemoveItem(item.id)}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        className="cart-item-remove-btn"
                        onClick={() => handleRemoveItem(item.id)}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
