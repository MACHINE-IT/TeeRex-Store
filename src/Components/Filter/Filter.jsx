import React from "react";
import { Avatar, Button, Stack, Container, Grid, Card, CardContent, Checkbox } from "@mui/material";
import { colour, gender, price, type } from "../../FilterData/FiltersData";
import "./Filter.css";

const Filter = ({ handleFilterColour, handleFilterGender, handleFilterPrice, handleFilterType, showFilter }) => {
    return (
        <>
            <Card className="filter-card" style={{ display: showFilter && 'block' }}>
                <CardContent className="filter-content">
                    <h3>Colour</h3>
                    {/* <ul className='filter'> */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-10px" }} >
                        {
                            colour.map((colour) => {
                                return (
                                    <div key={colour.id} style={{ display: "flex", alignItems: "center", marginRight: "16px", marginTop: "-10px" }}>
                                        <Checkbox
                                            value={colour.label}
                                            onChange={handleFilterColour}
                                        />
                                        <span style={{ marginLeft: "4px" }}>{colour.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <h3>Gender</h3>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-10px" }} >
                        {
                            gender.map((gender) => {
                                return (
                                    <div key={gender.id} style={{ display: "flex", alignItems: "center", marginRight: "16px", marginTop: "-10px" }}>
                                        <Checkbox
                                            value={gender.label}
                                            onChange={handleFilterGender}
                                        />
                                        <span style={{ marginLeft: "4px" }}>{gender.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <h3>Price</h3>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-10px" }} >
                        {
                            price.map((price) => {
                                return (
                                    <div key={price.id} style={{ display: "flex", alignItems: "center", marginRight: "16px", marginTop: "-10px" }}>
                                        <Checkbox
                                            value={JSON.stringify(price)}
                                            onChange={handleFilterPrice}
                                        />
                                        <span style={{ marginLeft: "4px" }}>{price.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <h3>Type</h3>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-10px" }} >
                        {
                            type.map((type) => {
                                return (
                                    <div key={type.id} style={{ display: "flex", alignItems: "center", marginRight: "16px", marginTop: "-10px" }}>
                                        <Checkbox
                                            value={type.label}
                                            onChange={handleFilterType}
                                        />
                                        <span style={{ marginLeft: "4px" }}>{type.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* </ul> */}
                    {/* <h3>Gender</h3>
                    <ul className='filter'>
                        {
                            gender.map((gender) => {
                                return <li key={gender.id}>
                                    <label className="checkBox-container">{gender.label}
                                        <input type="checkbox" value={gender.label} onChange={handleFilterGender} />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            })
                        }
                    </ul>
                    <h3>Price</h3>
                    <ul className='filter'>
                        {
                            price.map((price) => {
                                return <li key={price.id}>
                                    <label className="checkBox-container">{price.label}
                                        <input type="checkbox"
                                            value={JSON.stringify(price)}
                                            onChange={handleFilterPrice}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            })
                        }
                    </ul>
                    <h3>Type</h3>
                    <ul className='filter'>
                        {
                            type.map((type) => {
                                return <li key={type.id}>
                                    <label className="checkBox-container">{type.label}
                                        <input type="checkbox" value={type.label}
                                            onChange={handleFilterType} />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            })
                        }
                    </ul> */}
                </CardContent>
            </Card>
        </>
    );
}

export default Filter;