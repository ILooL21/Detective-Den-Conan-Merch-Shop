import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllSupportsQuery, useDeleteSupportMutation } from "../slices/supportApiSlice";

const ListSupportScreen = () => {
  const [listSupport, setListSupport] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const { data } = useGetAllSupportsQuery();
  const [deleteSupport] = useDeleteSupportMutation();

  useEffect(() => {
    setListSupport(data);
  }, [data]);

  return (
    <div
      style={{
        paddingTop: "150px",
      }}>
      <h1>Support Tickets</h1>
      <p>Ini adalah halaman support</p>
      <p>Welcome, {userInfo.name}</p>
      {listSupport?.map((support) => (
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
