import { useGetAllUsersQuery, useChangeRoleMutation } from "../slices/usersApiSlice";
import { Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { Breadcrumb } from "antd";
import "../styles/ListUserScreen.css";

const ListUserScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const { data: users } = useGetAllUsersQuery();
  const [changeRole, { isLoading }] = useChangeRoleMutation();

  useEffect(() => {
    setList(users);
  }, [users]);

  const clickHandler = async (id) => {
    try {
      await changeRole({ id: id }).unwrap();
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  const searchHandler = () => {
    if (search !== "") {
      const regex = new RegExp(search, "i");
      const results = users?.filter((user) => {
        return regex.test(user.name);
      });
      if (results.length === 0) {
        toast.error("User tidak ditemukan");
      } else {
        setList(results);
      }
    } else {
      setList(users);
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
                type="submit"
                className="button-list-user">
                <FaSearch />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <table className="table-list-user">
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
            <tr key={user._id}>
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
