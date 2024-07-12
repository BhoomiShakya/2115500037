import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Card key={product.id} variant="outlined">
          <CardContent>
            <Typography variant="h5">{product.productName}</Typography>
            <Typography variant="body2">Price: ${product.price}</Typography>
            <Typography variant="body2">Rating: {product.rating}</Typography>
            <Typography variant="body2">Discount: {product.discount}%</Typography>
            <Typography variant="body2">Availability: {product.availability}</Typography>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
