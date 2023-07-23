import React from "react";
import { Grid } from "@mui/material";
import "./Cart.css";

const TotalAmount = ({ totalAmount }) => {
    return (
        <Grid container spacing={2} className="total-amount">
            <Grid item>Total Amount</Grid>
            <Grid item>&#8377; {totalAmount}</Grid>
        </Grid>
    );
};

export default TotalAmount;
