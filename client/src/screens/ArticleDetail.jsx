import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailArticle = () => {
  const { id } = useParams();

  const judulArticle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <Container>
      <div style={{marginTop: "150px"}}>
          <div style={{ marginTop: "15px" }}>
            <h1 style={{ judulArticle }}>
              {" "}
              Judul Article Judul Article Judul Article Judul Article
            </h1>
          </div>
          <div style={{ height: "1px", backgroundColor: "black" }}>
            <br />
          </div>
        <div style={{ marginTop: "0" }}>
          <small>Created_at</small>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            tempore? Nisi ipsam enim quo aliquid ducimus saepe, temporibus
            perferendis velit ipsum debitis repellat reiciendis molestias porro
            tempore quas, culpa illo ad non! Harum quisquam reprehenderit,
            consequatur provident molestiae reiciendis minus, ex quos excepturi,
            ipsam doloribus eligendi. Nihil molestiae repudiandae, vel odio
            consectetur esse ducimus impedit officia repellendus assumenda iure
            voluptas sequi illo perferendis reiciendis. Eos minus sit, labore
            culpa iste expedita perferendis eveniet, minima perspiciatis laborum
            sapiente aliquid blanditiis recusandae cum qui veniam unde nisi
            necessitatibus vitae deleniti numquam! Labore possimus architecto,
            sed neque veritatis nihil incidunt in! Recusandae!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DetailArticle;
