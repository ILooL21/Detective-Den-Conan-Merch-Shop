import { useGetAllUsersQuery, useChangeRoleMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { Breadcrumb } from "antd";
import "../styles/ListUserScreen.css";

const ListUserScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { data } = useGetAllUsersQuery();
  const [changeRole, { isLoading }] = useChangeRoleMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setList(data);
  }, [data]);

  const clickHandler = async (id) => {
    try {
      const res = await changeRole({ id: id, userId: userInfo._id }).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  const searchHandler = () => {
    if (search !== "") {
      const results = data?.filter((user) => {
        return user.email.toLowerCase().startsWith(search.toLowerCase());
      });
      if (results.length === 0) {
        toast.error("User not found");
      } else {
        setList(results);
      }
    } else {
      setList(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchHandler();
  };

  return (
    <div className="container-list-user">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-center my-3">
          <div className="container-list-user-header">
            <Breadcrumb
            className="breadcrumb-list-user"
            items={[
              {
                title: <a href="/">Home</a>,
              },
              {
                title: <a href="/dashboard">Dashboard</a>,
              },
              {
                title: "List User",
              },
            ]}
          />
        </div>
            <div className="d-flex align-items-center">
              <input
                className="input-search-user"
                type="text"
                placeholder="Search by email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "200px" }}
              />
              <Button
                type="submit" // Menjadikan button sebagai tombol submit
                className="button-list-user">
                <FaSearch />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <table
        className="table-list-user">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((user) => (
            <tr
              key={user._id}
              onSubmit={clickHandler}>
              <td>{list.indexOf(user) + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="d-grid gap-2">
                {user.role === "admin" ? (
                  <Button
                    variant="primary"
                    onClick={() => clickHandler(user._id)}>
                    Ubah Ke User
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => clickHandler(user._id)}>
                    Ubah ke Admin
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <Loader />}
    </div>
  );
};

export default ListUserScreen;
