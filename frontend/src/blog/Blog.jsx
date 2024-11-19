import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "Comment réussir son projet React",
      content: "Découvrez les meilleures pratiques pour réussir votre projet React...",
      author: "Jean Dupont",
      date: "2024-11-18",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Guide pratique pour utiliser React Router",
      content: "Un guide étape par étape pour intégrer React Router dans votre application.",
      author: "Marie Curie",
      date: "2024-11-17",
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div>
      <PageHeader title="Blog Page" curPage="Blog" />
      <div className="container mt-4">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-6 mb-4" key={article.id}>
              <div className="card">
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.content.substring(0, 100)}...</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Par {article.author} - {article.date}
                    </small>
                  </p>
                  <a href={`/blog/${article.id}`} className="btn btn-primary">
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
