import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useGetAllArticlesQuery } from "../slices/articleApiSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ArtikelScreens = () => {
  const { data: articles, isLoading } = useGetAllArticlesQuery();
  const navigate = useNavigate();
  const artikelHeader = {
    width: "100%",
  };

  const fontStyleJudul = {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold",
    color: "black",
  };
  const fontStyleName = {
    textDecoration: "none",
    fontSize: "12px",
    color: "gray",
  };

  const cardStyle = {
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "350px",
    cursor: "pointer",
  };

  const cardImgStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
  };

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(dateString));
  };

  return (
    <Container>
      <div>
        <div className="container">
          <div
            className="artikel-header d-flex justify-content-between align-items-center"
            style={{ marginTop: "150px", artikelHeader }}>
            <div>
              <h2 className="fs-2">Artikel</h2>
            </div>
          </div>

          <div className="mt-2">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="mt-3 mb-3">
                <div className="card-artikel">
                  <Row>
                    {articles?.map((article) => (
                      <Col
                        md={3}
                        key={article._id}>
                        <Card
                          style={cardStyle}
                          onClick={() => navigate(`/article/${article._id}`)}>
                          <Card.Img
                            variant="top"
                            src={`http://localhost:8080/${article.images}`}
                            style={cardImgStyle}
                            href={`/article/${article._id}`}
                          />
                          <Card.Body className="d-flex flex-column">
                            <div style={fontStyleJudul}>{article.judul}</div>
                            <div style={fontStyleName}>
                              By {article.penulis} - {formatDateTime(article.createdAt)}
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtikelScreens;
