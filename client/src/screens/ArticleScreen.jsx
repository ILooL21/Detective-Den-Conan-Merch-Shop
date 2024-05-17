import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap";

const ArtikelScreens = () => {
  const fontStyle = {
    textDecoration: "none",
    color: "black",
  };
  const artikelHeader = {
    width: "100%",
  };
  const fontAllArtikel = {
    textDecoration: "gray underline",
    color: "gray",
  };

  const fontStyleJudul = {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold"
  };
  const fontStyleName = {
    textDecoration: "none",
    fontSize: "10px",
   
  };
  return (
    <Container>
      <div>
        <div className="container">
          <div
            className="artikel-header d-flex justify-content-between align-items-center"
            style={{ marginTop: "150px", artikelHeader }}
          >
            <div>
              <h2 className="fs-2">Artikel Screen</h2>
            </div>
            <div className="d-flex gap-1">
              <div>
                <a href="/" style={fontStyle}>
                  Home
                </a>
              </div>
              / Artikel
            </div>
          </div>

          {/* Tujuan Ini Dibuat biar dibenarin sama Rama dan Kawan Kawan heheheh :hehehe */}
          {/* Carousel */}
          {/* <Carousel
            className=""
            style={{
              borderRadius: "10px",
              width: "80%",
            }}
          >
            <Carousel.Item>
              <img src="../src/assets/images/Conan-Home-Image.png"  alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="../src/assets/images/Conan-Home-Image.png"  alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="../src/assets/images/Conan-Home-Image.png"  alt="" />
            </Carousel.Item>
          </Carousel> */}
          {/* End Carousel */}

          <div className="mt-2">

            {/* Artikel */}
            <div className="mt-3 mb-3">
              <div className="card-artikel ">
                <Row>
                <Col md={3}>
                    <a href="/artikel/">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/286x200"
                        />
                      </Card>
                      <div
                        className="artikel-cardBody d-flex gap-2 mt-3"
                        style={{ alignItems: "center", textDecoration: "none" }}
                      >
                        <div class="d-flex flex-column">
                          <div style={fontStyleJudul}>Judul Article</div>
                          <div style={fontStyleName}>Name</div>
                        </div>
                      </div>
                    </a>
                  </Col>
                <Col md={3}>
                    <a href="/artikel/">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/286x200"
                        />
                      </Card>
                      <div
                        className="artikel-cardBody d-flex gap-2 mt-3"
                        style={{ alignItems: "center", textDecoration: "none" }}
                      >
                        <div class="d-flex flex-column">
                          <div style={fontStyleJudul}>Judul Article</div>
                          <div style={fontStyleName}>Name</div>
                        </div>
                      </div>
                    </a>
                  </Col>
                <Col md={3}>
                    <a href="/artikel/">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/286x200"
                        />
                      </Card>
                      <div
                        className="artikel-cardBody d-flex gap-2 mt-3"
                        style={{ alignItems: "center", textDecoration: "none" }}
                      >
                        <div class="d-flex flex-column">
                          <div style={fontStyleJudul}>Judul Article</div>
                          <div style={fontStyleName}>Name</div>
                        </div>
                      </div>
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href="/artikel/">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/286x200"
                        />
                      </Card>
                      <div
                        className="artikel-cardBody d-flex gap-2 mt-3"
                        style={{ alignItems: "center", textDecoration: "none" }}
                      >
                        <div class="d-flex flex-column">
                          <div style={fontStyleJudul}>Judul Article</div>
                          <div style={fontStyleName}>Name</div>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>

            {/* End Artikel */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtikelScreens;
