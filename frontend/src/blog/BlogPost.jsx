import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2>Article non trouvé</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{article.title}</h1>
      <p>
        <strong>Par {article.author}</strong> - {article.date}
      </p>
      <img src={article.image} alt={article.title} className="img-fluid mb-4" />
      <p>{article.content}</p>
    </div>
  );
};

export default BlogPost;
