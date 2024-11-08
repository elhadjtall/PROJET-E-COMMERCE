import React from 'react';

const ShopCategory = ({ filterItem, menuItems, selectedCategory, setSelectedCategory, setProducts, setItem }) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        {
          menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`m-2 ${selectedCategory === item ? "bg-warning" : ""}`}
              onClick={() => {
                filterItem(val);
              }}
            >
              {val}
            </button>
          ))
        }
      </div>
    </>
  );
}

export default ShopCategory;
