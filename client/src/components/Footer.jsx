import { Layout } from "antd";
// import "../styles/Footer.css";

const FooterComponent = () => {
  const { Footer } = Layout;

  return (
    <Layout>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "440px",
          backgroundColor: "#000",
        }}
      >
        <ul>
          <li>
            <a href="/about" className="dropdown-content">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="dropdown-content">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="dropdown-content">
              Privacy
            </a>
          </li>
          <li>
            <a href="/terms" className="dropdown-content">
              Terms
            </a>
          </li>
        </ul>
      </Footer>
    </Layout>
  );
};
export default FooterComponent;
