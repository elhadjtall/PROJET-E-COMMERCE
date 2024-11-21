import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const products = [
    {
      id: 1,
      name: "Produit 1",
      description: "Description brève du produit 1.",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Produit 2",
      description: "Description brève du produit 2.",
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Produit 3",
      description: "Description brève du produit 3.",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mt-4">
      <h1>Blog</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
