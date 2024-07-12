// src/components/Filters.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, company, minPrice, maxPrice, rating, availability });
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Laptop">LAPTOP</MenuItem>
          {/* Add more categories */}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={e => setCompany(e.target.value)}>
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          {/* Add more companies */}
        </Select>
      </FormControl>

      <TextField label="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      <TextField label="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      <TextField label="Rating" value={rating} onChange={e => setRating(e.target.value)} />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select value={availability} onChange={e => setAvailability(e.target.value)}>
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleFilterChange}>Apply Filters</Button>
    </div>
  );
};

export default Filters;
