import { useSelector } from "react-redux";
import RefreshToken from "../components/RefreshToken";

const DasboardScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <RefreshToken />
      <div>
        <h1>Ini halaman Dashboard</h1>
        <h2>Welcome {userInfo.name}</h2>
        {userInfo.role === "owner" && <a href="/listallusers">user</a>}
      </div>
    </>
  );
};

export default DasboardScreen;
