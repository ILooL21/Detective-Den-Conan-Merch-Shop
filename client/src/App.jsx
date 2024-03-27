import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container style={{ padding: "24px" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;
