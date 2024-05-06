import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useEffect, useState } from "react";
import { useAddAlamatMutation, useDeleteAlamatMutation } from "../slices/usersApiSlice";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/ListAddressScreen.css";

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
      if (!listAlamatBaru) {
        toast.error("Please fill in all fields");
        return;
      }
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

  const items = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/addressbook",
      title: "List Address Screen",
    },
  ];

  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? <span>{currentRoute.title}</span> : <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>;
  }

  useEffect(() => {
    const setAddressList = async () => {
      await setListAlamat(userInfo.listalamat);
    };
    setAddressList();
  }, [userInfo, listAlamat, setListAlamat]);

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }, [listAlamatBaru]);

  return (
    <>
      <div className="container-address">
        <div className="container-address-header">
          <Breadcrumb
            className="breadcrumb-address"
            itemRender={itemRender}
            items={items}
          />
        </div>
        <div className="container-address-add">
          <h3>Add New Address</h3>
          <textarea
            type="text"
            placeholder="Enter new address"
            value={listAlamatBaru}
            onChange={(e) => setListAlamatBaru(e.target.value)}>
          </textarea>
          <button onClick={AddClickHandler}>Tambah</button>
        </div>
        {listAlamat.map((alamat, index) => (
          <div className="container-address-list" key={index}>
            <p>{alamat}</p>
            <button
              onClick={() => {
                DeleteClickHandler(alamat);
              }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListAddressScreen;
