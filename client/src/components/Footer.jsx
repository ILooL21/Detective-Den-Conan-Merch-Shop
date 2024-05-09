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
          height: "60vh",
          backgroundColor: "#000",
        }}>
        <div className="footer-container">
          <div className="footer-links">
            <h1>Exclusive</h1>
            <a href="/katalog">Get 10% off your first order</a>
          </div>
          <div className="footer-links">
            <h1>Support</h1>
            <a href="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
            <a href="">exclusive@gmail.com</a>
            <a href="">+88015-88888-9999</a>
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
            <a>Privacy Policy</a>
            <a>Terms Of Use</a>
            <a>FAQ</a>
            <a>Contact</a>
          </div>
        </div>
      </Footer>
      <Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "5vh",
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
