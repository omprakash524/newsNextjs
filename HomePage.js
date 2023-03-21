import { useState, useEffect } from "react";
import { getTopHeadlines } from "../utils/NewsAPI";
import Layout from "../components/Layout";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getTopHeadlines();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <Layout>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default HomePage;
