import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllSupportsQuery, useDeleteSupportMutation } from "../slices/supportApiSlice";
import RefreshToken from "../components/RefreshToken";
import { Breadcrumb } from "antd";
import "../styles/SupportScreen.css";

const ListSupportScreen = () => {
  const [listSupport, setListSupport] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const { data } = useGetAllSupportsQuery();
  const [deleteSupport] = useDeleteSupportMutation();

  useEffect(() => {
    setListSupport(data);
  }, [data]);

  return (
    <div className="container-support">
      <RefreshToken />
        <div className="container-support-header">
        <Breadcrumb
            className="breadcrumb-support"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: <a href="/dashboard">Dashboard</a>,
              },
              {
                title: "Support",
              },
            ]}
          />
          {userInfo ? <h2>Welcome! <span>{userInfo.name}</span></h2> : null}
        </div>
      {listSupport && listSupport.message !== null && <h5>{listSupport.message}</h5>}
      {listSupport &&
        listSupport.length > 0 &&
        listSupport.map((support) => (
          <div
            key={support._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}>
            <h4>{support.subject}</h4>
            <p>Dari {support.email}</p>
            <p>{support.message}</p>
            <button
              onClick={async () => {
                try {
                  await deleteSupport({ id: support._id });
                  window.location.reload();
                } catch (err) {
                  console.error(err);
                }
              }}>
              Selesai
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListSupportScreen;
