import { useSelector } from "react-redux";
import RefreshToken from "../components/RefreshToken";
import { Breadcrumb } from "antd";
import { BarsOutlined, QuestionOutlined } from "@ant-design/icons";
import "../styles/Dashboard.css";

const DasboardScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "136px 0px 0px",
        }}>
        <div className="container-navbar-dashboard">
          <div className="navbar-dashboard-list">
            {userInfo.role === "superadmin" && (
              <div>
                <a href="/listallusers">
                  <BarsOutlined className="icon-navbar-dashboard" />
                  List User
                </a>
              </div>
            )}
            <div>
              <a href="/listcategories">
                <BarsOutlined className="icon-navbar-dashboard" />
                List Kategori
              </a>
            </div>
            <div>
              <a href="/listproducts">
                <BarsOutlined className="icon-navbar-dashboard" />
                List Product
              </a>
            </div>
            <div>
              <a href="/listarticles">
                <BarsOutlined className="icon-navbar-dashboard" />
                List Artikel
              </a>
            </div>
            <div>
              <a href="/listriddles">
                <BarsOutlined className="icon-navbar-dashboard" />
                List Riddle
              </a>
            </div>
            <div>
              <a href="/listorders">
                <BarsOutlined className="icon-navbar-dashboard" />
                List Order
              </a>
            </div>
            <div>
              <a href="/support">
                <QuestionOutlined className="icon-navbar-dashboard" />
                Support
              </a>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DasboardScreen;
