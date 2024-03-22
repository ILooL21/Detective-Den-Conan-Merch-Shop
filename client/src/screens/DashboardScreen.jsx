import { useGetAllUsersQuery } from "../slices/usersApiSlice";
import { Table, Button } from "react-bootstrap";

const DasboardScreen = () => {
  const { data } = useGetAllUsersQuery();

  return (
    <div>
      <h1>Ini halaman Dashboard</h1>
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
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="d-grid gap-2">{user.role === "admin" ? <Button variant="primary">Ubah Ke User</Button> : <Button variant="secondary">Ubah ke Admin</Button>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DasboardScreen;
