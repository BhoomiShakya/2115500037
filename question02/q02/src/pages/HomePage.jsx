// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { Alert } from '@mui/material';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: 0,
    maxPrice: 10000,
    rating: '',
    availability: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(filters.company, filters.category, 10, filters.minPrice, filters.maxPrice);
        setProducts(response);
        setError(null); // Reset error state on successful fetch
      } catch (err) {
        setError(err.message);
      }
    };

    if (filters.company && filters.category) {
      fetchProducts();
    }
  }, [filters]);

  return (
    <div>
      <Filters onFilterChange={setFilters} />
      {error && <Alert severity="error">{error}</Alert>}
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
