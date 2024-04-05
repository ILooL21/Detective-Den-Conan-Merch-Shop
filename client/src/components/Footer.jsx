import { Layout } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "../styles/Footer.css";

const FooterComponent = () => {
  const { Footer } = Layout;

  return (
    <Layout>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          backgroundColor: "#000",
        }}
      >
        <div className="footer-container">
          <div className="footer-links">
            <h1>Exclusive</h1>
            <h6>Subscribe</h6>
            <a href="">Get 10% off your first order</a>
          </div>
          <div className="footer-links">
            <h1>Support</h1>
            <a href="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
            <a href="">exclusive@gmail.com</a>
            <a href="">+88015-88888-9999</a>
          </div>
          <div className="footer-links">
            <h1>Account</h1>
            <a href="">My Account</a>
            <a href="">Login / Register</a>
            <a href="">Cart</a>
            <a href="">Whislist</a>
            <a href="">Shop</a>
          </div>
          <div className="footer-links">
            <h1>Quick Link</h1>
            <a href="">Privacy Policy</a>
            <a href="">Terms Of Use</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
          </div>
          <div className="footer-sosmed">
            <h1>Social Media</h1>
            <div className="footer-sosemed-links">
              <a href="">
                <FacebookOutlined />
              </a>
              <a href="">
                <InstagramOutlined />
              </a>
              <a href="">
                <XOutlined />
              </a>
              <a href="">
                <LinkedinOutlined />
              </a>
            </div>
          </div>
        </div>
      </Footer>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "56px",
          backgroundColor: "#000",
          borderTop: "1px solid #444",
        }}
      >
        <div className="footer-cr">
          <a>© Copyright 2024. All right reserved</a>
        </div>
      </Footer>
    </Layout>
  );
};
export default FooterComponent;
