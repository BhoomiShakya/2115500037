// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/api';
import ProductDetails from '../components/ProductDetails';
import { Alert } from '@mui/material';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProducts(); // Fetch the product based on ID or other parameters
        const product = response.find(p => p.id === productId);
        setProduct(product);
        setError(null); // Reset error state on successful fetch
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {product ? <ProductDetails product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductPage;
