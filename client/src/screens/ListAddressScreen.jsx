// import { useSelector, useDispatch } from "react-redux";
// import { setCredentials } from "../slices/authSlice";
// import { useEffect, useState } from "react";
// import { useAddAlamatMutation, useDeleteAlamatMutation } from "../slices/usersApiSlice";
// import { Breadcrumb } from "antd";
// import { toast } from "react-toastify";
// import "../styles/ListAddressScreen.css";

// const ListAddressScreen = () => {
//   const [listAlamat, setListAlamat] = useState([]);
//   const [listAlamatBaru, setListAlamatBaru] = useState("");

//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const [addAlamat] = useAddAlamatMutation();
//   const [deleteAlamat] = useDeleteAlamatMutation();

//   const AddClickHandler = async (e) => {
//     e.preventDefault();
//     try {
//       if (!listAlamatBaru) {
//         toast.error("Please fill in all fields");
//         return;
//       }
//       const res = await addAlamat({
//         id: userInfo._id,
//         alamat: listAlamatBaru,
//       }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       setListAlamatBaru("");
//       toast.success("Address added successfully");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const DeleteClickHandler = async (deletedAlamat) => {
//     try {
//       const res = await deleteAlamat({
//         id: userInfo._id,
//         alamat: deletedAlamat,
//       }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       toast.success("Address deleted successfully");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     const setAddressList = async () => {
//       await setListAlamat(userInfo.listalamat);
//     };
//     setAddressList();
//   }, [userInfo, listAlamat, setListAlamat]);

//   useEffect(() => {
//     const textareas = document.querySelectorAll("textarea");
//     textareas.forEach((textarea) => {
//       textarea.style.height = "auto";
//       textarea.style.height = textarea.scrollHeight + "px";
//     });
//   }, [listAlamatBaru]);

//   return (
//     <>
//       <div className="container-address">
//         <div className="container-address-header">
//         <Breadcrumb
//           className="breadcrumb-address"
//           items={[
//             {
//               title: <a href="/">Home</a>,
//             },
//             {
//               title: <a href="/profile">Profile</a>,
//             },
//             {
//               title: "My Address Book",
//             },
//           ]}
//           />
//         </div>
//         <div className="container-address-add">
//           <h3>Add New Address</h3>
//           <textarea
//             type="text"
//             placeholder="Enter new address"
//             value={listAlamatBaru}
//             onChange={(e) => setListAlamatBaru(e.target.value)}>
//           </textarea>
//           <button onClick={AddClickHandler}>Tambah</button>
//         </div>
//         {listAlamat.map((alamat, index) => (
//           <div className="container-address-list" key={index}>
//             <p>{alamat}</p>
//             <button
//               onClick={() => {
//                 DeleteClickHandler(alamat);
//               }}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ListAddressScreen;


import { useSelector, useDispatch } from "react-redux";
import { setCredentials, setSelectedAddress } from "../slices/authSlice";
import { useEffect, useState } from "react";
import { useAddAlamatMutation, useDeleteAlamatMutation } from "../slices/usersApiSlice";
import { Breadcrumb } from "antd";
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

  const SelectClickHandler = (selectedAlamat) => {
    dispatch(setSelectedAddress(selectedAlamat));
    toast.success("Address selected successfully");
  };

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
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/profile">Profile</a>,
            },
            {
              title: "My Address Book",
            },
          ]}
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
            <div
            style={{
              display: "flex",
              gap: "8px"
            }}>
              <button className="container-select-address-button"
              onClick={() => {
                SelectClickHandler(alamat);
              }}>
              Select
            </button>
            <button className="container-delete-address-button"
              onClick={() => {
                DeleteClickHandler(alamat);
              }}>
              Delete
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListAddressScreen;
