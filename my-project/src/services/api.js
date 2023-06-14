import axios from 'axios';

// Define a variable to hold the URL root

const BASE_URL = "https://fakestoreapi.com";

// Create function to get products from API

const getProducts = async () => {

    const response = await axios.get(`${BASE_URL}/products`);
    return response.data

}

export { getProducts }