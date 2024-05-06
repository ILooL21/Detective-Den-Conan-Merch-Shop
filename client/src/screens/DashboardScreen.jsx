import { useSelector } from "react-redux";
import RefreshToken from "../components/RefreshToken";
import "../styles/Dashboard.css";

const DasboardScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="container-dashboard">
        <RefreshToken />
        <div>
          <h1>Ini halaman Dashboard</h1>
          <h2>Welcome {userInfo.name}</h2>
          <ul>
            {userInfo.role === "superadmin" && (
              <li>
                <a href="/listallusers">user</a>
              </li>
            )}
            <li>
              <a href="/support">support</a>
            </li>
            <li>
              <a href="/listcategories">list kategori</a>
            </li>
            <li>
              <a href="/listproducts">list product</a>
            </li>
            <li>
              <a href="/listarticles">list artikel</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DasboardScreen;
