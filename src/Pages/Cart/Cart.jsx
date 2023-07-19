import "./Cart.css";
import EmptyCartSVG from "../../EmptyCartSVG/EmptyCartSVG";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    AddOutlined,
    RemoveOutlined,
    ShoppingCart,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, IconButton, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../../redux/actions";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems: cart } = useSelector((state) => state.cart);
    console.log("cart items are ", cart);

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
        <>
            <div
                className="cart-home-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                {cart.length ? (
                    cart.map((item) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "1rem",
                                }}
                                key={item.id}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        padding: "1rem",
                                        height: "100px",
                                        width: "600px",
                                    }}
                                >
                                    <img
                                        src={item.imageURL}
                                        height="100px"
                                        width="100px"
                                        style={{ objectFit: "contain", padding: "1rem" }}
                                        alt={item.name}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div>{item.name}</div>
                                        <div>&#8377;{item.price}</div>
                                    </div>
                                    <Stack direction="row" alignItems="center" padding="1rem">
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
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className="checkout-btn"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="empty-cart">
                        {<EmptyCartSVG />}
                        <div className="empty-cart-tagline">
                            <div>Your TeeRex cart is empty!</div>
                            <Button className="empty-cart-btn" onClick={() => navigate("/")}>
                                Continue Shopping
                            </Button>
                        </div>
                    </div>
                )}
                {cart.length > 0 && (
                    <Grid container spacing={2} className="total-amount">
                        <Grid item>Total Amount</Grid>
                        <Grid item>&#8377; {handleCartTotalAmount(cart)}</Grid>
                    </Grid>
                )}
            </div>
        </>
    );
};

export default Cart;
