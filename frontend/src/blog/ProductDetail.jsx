import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Produit 1",
      description: "Description complète du produit 1.",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Produit 2",
      description: "Description complète du produit 2.",
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Produit 3",
      description: "Description complète du produit 3.",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produit non trouvé</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid mb-4" />
      <p>{product.description}</p>
      <p><strong>Prix :</strong> {product.price.toFixed(2)} €</p>
    </div>
  );
};

export default ProductDetail;