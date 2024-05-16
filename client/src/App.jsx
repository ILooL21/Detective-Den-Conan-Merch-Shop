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

  return (
    <>
      {(isContactPage || isRiddlePage || isDashboardPage || isRootPage || isSupportPage || isKatalogPage || isNewsPage || isWikiPage) && <Header />}
      <ToastContainer />
      <Outlet />
      {(isContactPage || isRiddlePage || isDashboardPage || isRootPage || isSupportPage || isKatalogPage || isNewsPage || isWikiPage) && <Footer />}
    </>
  );
};

export default App;
