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
          {userInfo.role === "superadmin" && <a href="/listallusers">user</a>}
        </div>
      </div>
    </>
  );
};

export default DasboardScreen;
