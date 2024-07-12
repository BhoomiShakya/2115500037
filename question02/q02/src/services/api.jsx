// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies/FLP/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';

export const getProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const url = `${BASE_URL}/companies/${company}/categories/${category}/products/top-${topN}minPrice-${minPrice}&maxPrice-${maxPrice}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products. Please try again later.');
  }
};
