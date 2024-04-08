import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RefreshToken from "../components/RefreshToken";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { Breadcrumb } from "antd";
import "../styles/ProfileScreen.css";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  const items = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/profile",
      title: "My Account",
    },
  ];

  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? (
      <span>{currentRoute.title}</span>
    ) : (
      <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>
    );
  }
  return (
    <>
      <div className="container-profile">
        <RefreshToken />
        <div className="container-profile-header">
          <Breadcrumb
            className="breadcrumb-profile"
            itemRender={itemRender}
            items={items}
          />
          {userInfo ? (
            <h2>
              Welcome! <h3>{userInfo.name}</h3>
            </h2>
          ) : null}
        </div>
        <div className="container-menu-form-profile">
          <div className="menu-profile">
            <h2>Manage My Account</h2>
            <ul>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>

              <li>
                <Link to="/profile">Address Book</Link>
              </li>
              <li>
                <Link to="/profile">My Payment Options</Link>
              </li>
            </ul>
            <h2>My Orders</h2>
            <ul>
              <li>
                <Link to="/profile">My Returns</Link>
              </li>
              <li>
                <Link to="/profile">My Cancellations</Link>
              </li>
            </ul>
            <h2>My WishList</h2>
          </div>
          <Form onSubmit={submitHandler} className="container-form-profile">
            <h1>Edit Your Profile</h1>
            <Form.Group className="form-profile" controlId="name">
              <label>Name</label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-profile-input"
              ></Form.Control>
            </Form.Group>
            <div className="container-email-address">
              <Form.Group className="form-profile" controlId="email">
                <label>Email Address</label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-profile-input"
                  disabled
                ></Form.Control>
              </Form.Group>
              <Form.Group className="form-profile" controlId="address">
                <label>Address</label>
                <Form.Control
                  type="address"
                  placeholder="Enter Address"
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                  className="form-profile-input"
                ></Form.Control>
              </Form.Group>
            </div>

            <Form.Group className="form-profile" controlId="password">
              <label>Password Changes</label>
              <Form.Control
                type="password"
                placeholder="Current password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-profile-input"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-profile" controlId="password">
              <Form.Control
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-profile-input"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-profile" controlId="confirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-profile-input"
              ></Form.Control>
            </Form.Group>
            <div className="container-button-profile">
              <button className="button-profile-cancel">Cancel</button>
              <button type="submit" className="button-profile-save">
                Save Changes
              </button>
            </div>

            {isLoading && <Loader />}
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
