import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useEffect, useState } from "react";
import { useAddAlamatMutation, useDeleteAlamatMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";

const ListAddressScreen = () => {
  const [listAlamat, setListAlamat] = useState([]);
  const [listAlamatBaru, setListAlamatBaru] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addAlamat] = useAddAlamatMutation();
  const [deleteAlamat] = useDeleteAlamatMutation();

  const AddClickHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await addAlamat({
        id: userInfo._id,
        alamat: listAlamatBaru,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      setListAlamatBaru("");
      toast.success("Address added successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const DeleteClickHandler = async (deletedAlamat) => {
    try {
      const res = await deleteAlamat({
        id: userInfo._id,
        alamat: deletedAlamat,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Address deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const setAddressList = async () => {
      await setListAlamat(userInfo.listalamat);
    };
    setAddressList();
  }, [userInfo, listAlamat, setListAlamat]);

  return (
    <>
      <div
        style={{
          paddingTop: "150px",
        }}>
        <h1>List Address Screen</h1>
        {listAlamat.map((alamat, index) => (
          <div key={index}>
            <p>{alamat}</p>
            <button
              onClick={() => {
                DeleteClickHandler(alamat);
              }}>
              delete
            </button>
          </div>
        ))}
        <div>
          <h3>Add New Address</h3>
          <textarea
            type="text"
            value={listAlamatBaru}
            onChange={(e) => setListAlamatBaru(e.target.value)}></textarea>
          <button onClick={AddClickHandler}>tambah</button>
        </div>
      </div>
    </>
  );
};

export default ListAddressScreen;
