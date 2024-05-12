import { useSelector } from "react-redux";
import RefreshToken from "../components/RefreshToken";
import { Breadcrumb } from "antd";
import "../styles/Dashboard.css";

const DasboardScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="container-dashboard">
        <RefreshToken />
        <div className="container-dashboard-header">
          <Breadcrumb
            className="breadcrumb-dashboard"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: "Dashboard",
              },
            ]}
          />
        </div>
        <div className="container-dashboard-main">
          <h2>Welcome {userInfo.name}</h2>
          <div className="container-content-dashboard">
            {userInfo.role === "superadmin" && (
              <div className="content-dashboard">
                <a href="/listallusers">User</a>
              </div>
            )}
            <div className="content-dashboard">
              <a href="/support">Support</a>
            </div>
            <div className="content-dashboard">
              <a href="/listcategories">List Kategori</a>
            </div>
            <div className="content-dashboard">
              <a href="/listproducts">List Product</a>
            </div>
            <div className="content-dashboard">
              <a href="/listarticles">List Artikel</a>
            </div>
            <div className="content-dashboard">
              <a href="/listriddles">List Riddle</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DasboardScreen;
