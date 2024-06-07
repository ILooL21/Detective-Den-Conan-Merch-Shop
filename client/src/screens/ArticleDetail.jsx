import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../slices/articleApiSlice";

const DetailArticle = () => {
  const { id } = useParams();
  const { data: article, isLoading } = useGetArticleByIdQuery(id);

  const judulArticle = {
    fontSize: "40px",
    fontWeight: "bold",
  };

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      weekday: "long",
      timeZone: "Asia/Jakarta",
    };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(dateString));
  };

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ marginTop: "150px" }}>
          <div style={{ marginTop: "15px" }}>
            <h1 style={judulArticle}>{article.judul}</h1>
          </div>
          <div>
            <small>{`By ${article.penulis} - ${formatDateTime(article.createdAt)}`}</small>
          </div>
          <div style={{ height: "1px", backgroundColor: "black", margin: "10px 0" }}></div>
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
            <img
              src={`http://localhost:8080/${article.images}`}
              alt="article"
              style={{ width: "100%", maxWidth: "700px", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div style={{ marginTop: "10px", whiteSpace: "pre-line" }}>
            <p>{article.isi}</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default DetailArticle;
