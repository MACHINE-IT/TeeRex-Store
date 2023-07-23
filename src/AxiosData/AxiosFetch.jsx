import axios from "axios";
import { config } from "../config";

const baseURL = config.productsCatalog;

export const fetchProductsAPI = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
