import { Layout } from "antd";
import { useSelector } from "react-redux";
import "../styles/Footer.css";

const FooterComponent = () => {
  const { Footer } = Layout;

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          backgroundColor: "#000",
        }}>
        <div className="footer-container">
          <div className="footer-links">
            <h1>Exclusive</h1>
            <a href="/katalog">Get 10% off your first order</a>
          </div>
          <div className="footer-links">
            <h1>Support</h1>
            <a href="">Jl. Panglima Sudirman No.125, Sawah, Banjarmendalan, Kec. Lamongan, Kabupaten Lamongan, Jawa Timur 62212</a>
            <a href="">exclusive@gmail.com</a>
            <a href="">+62815-8888-9999</a>
          </div>
          <div className="footer-links">
            <h1>Account</h1>
            {userInfo ? (
              <>
                <a href="/profile">My Account</a>
                <a href="/cart">Cart</a>
                <a href="/katalog">Shop</a>
              </>
            ) : (
              <>
                <a href="/login">Login / Register</a>
                <a href="/katalog">Shop</a>
              </>
            )}
          </div>
          <div className="footer-links">
            <h1>Quick Link</h1>
            <a href="">Privacy Policy</a>
            <a href="">Terms Of Use</a>
            <a href="">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </Footer>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          backgroundColor: "#000",
          borderTop: "1px solid #444",
        }}>
        <div className="footer-cr">
          <a>© Copyright 2024. All right reserved</a>
        </div>
      </Footer>
    </Layout>
  );
};
export default FooterComponent;
