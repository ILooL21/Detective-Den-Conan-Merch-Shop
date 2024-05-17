import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const isRootPage = location.pathname === "/";
  const isContactPage = location.pathname.startsWith("/contact");
  const isRiddlePage = location.pathname.startsWith("/riddle");
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isSupportPage = location.pathname.startsWith("/support");
  const isKatalogPage = location.pathname.startsWith("/katalog");
  const isNewsPage = location.pathname.startsWith("/news");
  const isWikiPage = location.pathname.startsWith("/wiki");
  const isProductPage = location.pathname.startsWith("/product/");
  const isCartPage = location.pathname.startsWith("/cart");
  const isProfilePage = location.pathname.startsWith("/profile");
  const isAddressPage = location.pathname.startsWith("/addressbook");

  return (
    <>
      {(isContactPage || isRiddlePage || isDashboardPage || isRootPage || isSupportPage || isKatalogPage || isNewsPage || isWikiPage || isProductPage || isCartPage || isProfilePage || isAddressPage) && <Header />}
      <ToastContainer />
      <Outlet />
      {(isContactPage || isRiddlePage || isDashboardPage || isRootPage || isSupportPage || isKatalogPage || isNewsPage || isWikiPage || isProductPage || isCartPage || isProfilePage || isAddressPage) && <Footer />}
    </>
  );
};

export default App;
