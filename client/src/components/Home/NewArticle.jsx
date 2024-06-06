import { useEffect, useState } from "react";
import { useGetAllArticlesQuery } from "../../slices/articleApiSlice";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/NewArticle.css";

const NewArticle = () => {
  const [listArticle, setListArticle] = useState([]);
  const navigate = useNavigate();
  const { data: articles, isLoading } = useGetAllArticlesQuery();
  useEffect(() => {
    if (!isLoading && articles) {
      const updatedList = articles
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);

      setListArticle(updatedList);
    }
  }, [articles, isLoading, setListArticle]);
  return (
    <>
    <div>
      <h1 className="title-new-article">New Article</h1>
    </div>
      <div className="container-new-article">
        <Carousel>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : listArticle && listArticle.length > 0 ? (
            listArticle?.map((article) => (
              <Carousel.Item
              className="new-article"
                key={article._id}
                onClick={() => navigate(`/article/${article._id}`)}
              >
                <img
                  src={`http://localhost:8080/${article.images}`}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "contain",
                  }}
                />
                <Carousel.Caption className="body-new-article">
                  <h5>{article.judul}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <h1>No Article found</h1>
          )}
        </Carousel>
      </div>
    </>
  );
};
export default NewArticle;
