import { useGetAllUsersQuery, useChangeRoleMutation } from "../slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";

const ListUserScreen = () => {
  const dispatch = useDispatch();

  const { data } = useGetAllUsersQuery();
  const [changeRole, { isLoading }] = useChangeRoleMutation();

  const { userInfo } = useSelector((state) => state.auth);

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

  return (
    <div>
      <h3>Users</h3>
      <Table
        striped
        bordered
        hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr
              key={user._id}
              onSubmit={clickHandler}>
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
      </Table>
      {isLoading && <Loader />}
    </div>
  );
};

export default ListUserScreen;
