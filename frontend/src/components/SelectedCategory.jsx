import React from 'react'

const SelectedCategory = (select) => {
  return (
    <select>
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="computer">Computer</option>
      <option value="smart-home">Smart Home</option>
      <option value="automotive">Automotive</option>
      <option value="bady">Bady</option>
    </select>
  )
}

export default SelectedCategory
