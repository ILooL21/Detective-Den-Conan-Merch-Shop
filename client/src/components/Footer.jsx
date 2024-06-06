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
        }}
      >
        <div className="footer-container">
          <div className="footer-links">
            <h1>Exclusive</h1>
            <a href="/katalog">Get 10% off your first order</a>
          </div>
          <div className="footer-links">
            <h1>Support</h1>
            <a target="blank" href="https://www.google.com/maps/place/Politeknik+Elektronika+Negeri+Surabaya+(PENS)+PSDKU+Lamongan/@-7.1160776,112.4286083,18z/data=!4m6!3m5!1s0x2e77fb5639db7bbf:0x38f9dbc7075722fa!8m2!3d-7.1155235!4d112.4278539!16s%2Fg%2F11nnphycp8?entry=ttu">
              Jl. Panglima Sudirman No.125, Sawah, Banjarmendalan, Kec.
              Lamongan, Kabupaten Lamongan, Jawa Timur 62212
            </a>
            <a target="blank" href="https://pens.ac.id">exclusive@gmail.com</a>
            <a target="blank" href="https://wa.me/6285745820511">+6285745820511</a>
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
            <a href="/news">News</a>
            <a href="/wiki">Wiki</a>
            <a href="/riddle">Riddle</a>
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
