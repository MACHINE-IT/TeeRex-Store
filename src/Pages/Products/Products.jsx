import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Button, Stack, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { SearchOutlined, FilterAltOutlined } from '@mui/icons-material';
import "./Products.css";
import Filter from "../../Components/Filter/Filter"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { config } from "../../config"

const Products = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState([])
    const [showFilters, setShowFilters] = useState(false)
    const [filterState, setFilterState] = useState({
        colour: [],
        gender: [],
        type: [],
        priceRange: [],
        searchInput: ''
    })

    useEffect(() => {
        fetchProducts()
    }, []);

    useEffect(() => {
        filteredItems()
    }, [filterState]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${config.productsCatalog}`);
            setProducts(response.data);
            setFilter(response.data)
        } catch (e) {
            throw new Error(e)
        }
    }

    const handleFilterColour = (e) => {
        let newItems = [...filterState.colour]
        e.target.checked ? (
            newItems = [...filterState.colour, e.target.value]
        ) : (
            newItems.splice(filterState.colour.indexOf(e.target.value), 1)
        )

        setFilterState({ ...filterState, colour: newItems })

    }
    console.log("filterwa ", filter);

    const handleFilterGender = (e) => {
        let newItems = [...filterState.gender]
        e.target.checked ? (
            newItems = [...filterState.gender, e.target.value]
        ) : (
            newItems.splice(filterState.gender.indexOf(e.target.value), 1)
        )

        setFilterState({ ...filterState, gender: newItems })
    }

    const handleFilterPrice = (e) => {
        const { checked, value } = e.target;

        let newItems = [...filterState.priceRange];

        if (checked) {
            newItems.push(value);
        } else {
            newItems = newItems.filter((range) => range !== value);
        }

        setFilterState({ ...filterState, priceRange: newItems });
    }

    const handleFilterType = (e) => {
        let newItems = [...filterState.type];
        const value = e.target.value.toLowerCase();

        if (e.target.checked) {
            newItems = [...newItems, value];
        } else {
            newItems = newItems.filter((type) => type !== value);
        }

        setFilterState({ ...filterState, type: newItems });
    };

    const filteredItems = () => {
        let filteredItems = [...products];

        const searchItem = filterState.searchInput.toLowerCase();
        const searchAttributes = ['colour', 'gender', 'name', 'price'];
        if (filterState.searchInput) {
            filteredItems = filteredItems.filter((item) =>
                searchAttributes.some((key) => {
                    const property = item[key];
                    if (typeof property === 'string') {
                        return property.toLowerCase().includes(searchItem);
                    } else if (typeof property === 'number') {
                        return property.toString().toLowerCase().includes(searchItem);
                    }
                    return false;
                })
            );
        }

        if (filterState.colour.length) {
            filteredItems = filteredItems.filter(item =>
                filterState.colour.includes(item.color?.toLowerCase()))
        }
        if (filterState.gender.length) {
            filteredItems = filteredItems.filter(item =>
                filterState.gender.includes(item.gender?.toLowerCase()))
        }
        if (filterState.type.length) {
            filteredItems = filteredItems.filter((item) =>
                filterState.type.includes(item.type?.toLowerCase())
            );
        }

        if (filterState.priceRange.length) {
            filteredItems = filteredItems.filter((item) => {
                const itemPrice = item.price;
                return filterState.priceRange.some((range) => {
                    const { minValue, maxValue } = JSON.parse(range)
                    return itemPrice >= Number(minValue) && itemPrice <= Number(maxValue);
                });
            });
        }


        setFilter(filteredItems)
    }




    return (
        <>
            <Box className="home-box">
                <div className="search-container">
                    <input className="search-field"
                        type="text"
                        placeholder="Search for products..."
                        onChange={(e) =>
                            setFilterState({ ...filterState, searchInput: e.target.value })}
                        value={filterState.searchInput}
                    ></input>
                    <div className="search-icon">
                        <SearchOutlined />
                    </div>
                    <div className="filter-icon">
                        <FilterAltOutlined onClick={() => setShowFilters(!showFilters)} />
                    </div>
                </div>
                <div className="filter-products">
                    <div className="filter-section">
                        <Filter
                            showFilter={showFilters}
                            handleFilterColour={handleFilterColour}
                            handleFilterGender={handleFilterGender}
                            handleFilterPrice={handleFilterPrice}
                            handleFilterType={handleFilterType}
                        />
                    </div>
                    <div className="products-section">
                        <div className="products-container">
                            {
                                filter && filter.map((product) => (
                                    <div key={product.id}>
                                        <ProductCard productInfo={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </Box>
        </>
    );
}

export default Products;