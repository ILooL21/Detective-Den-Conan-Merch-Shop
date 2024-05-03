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
          {userInfo.role === "superadmin" && (
            <li>
              <a href="/listallusers">user</a>
            </li>
          )}
          {userInfo.role !== "user" && (
            <li>
              {" "}
              <a href="/support">support</a>
            </li>
          )}
        </div>
      </div>
    </>
  );
};

export default DasboardScreen;
