import React from "react";
import { Card, CardContent, Checkbox } from "@mui/material";
import { colour, gender, price, type } from "../../FilterData/FiltersData";
import "./Filter.css";

const Filter = ({
    handleFilterColour,
    handleFilterGender,
    handleFilterPrice,
    handleFilterType,
    showFilter,
}) => {
    const renderFilterOptions = (options, filterHandler) => {

        return (
            <div className="filter-option-container">
                {options.map((option) => {
                    return (
                        <div key={option.id} className="filter-option">
                            {
                                option.category === "price" ? (
                                    <Checkbox
                                        value={JSON.stringify(option)}
                                        onChange={handleFilterPrice}
                                    />

                                ) : (
                                    <Checkbox value={option.label} onChange={filterHandler} />
                                )
                            }
                            <span>{option.label}</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <Card className={`filter-card ${showFilter ? "" : "filter-mobile"}`}>
                <CardContent className="filter-content">
                    <h3>Colour</h3>
                    {renderFilterOptions(colour, handleFilterColour)}

                    <h3>Gender</h3>
                    {renderFilterOptions(gender, handleFilterGender)}

                    <h3>Price</h3>
                    {renderFilterOptions(price, handleFilterPrice)}

                    <h3>Type</h3>
                    {renderFilterOptions(type, handleFilterType)}
                </CardContent>
            </Card>
        </>
    );
};

export default Filter;
