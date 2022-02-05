import React, { useState, useEffect } from "react";
import Cards from "../../Card/Cards";
import { getData } from "../../Service/Service";
function Business() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getData()
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
        <h2 className="animated">Welcome to Health page</h2>
      ) : (
        <>
          {articles.map((article) => (
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

export default Business;
