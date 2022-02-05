import React, { useState, useEffect } from "react";
import Cards from "../../Card/Cards";
import { article } from "../../Service/Service";
function Tech() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    article()
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((e) => {
        setError("error");
      });
  }, []);

  return (
    <div>
      {error ? (
        <h2 className="animated">Welcome to Home page</h2>
      ) : (
        <>
          {articles.map((article, index) => (
            <Cards
              key={article.id}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          ))}
        </>
      )}
      <hr />
    </div>
  );
}

export default Tech;
