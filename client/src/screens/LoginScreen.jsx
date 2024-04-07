import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="container-login">
      <div className="image-auth-container">
        <img
          src="./src/assets/images/conan-gaya-auth.jpeg"
          alt="Conan"
          className="image-auth-login"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="login-auth">
          <div>
            <h1>Log in to Exclusive</h1>
            <h6>Enter your details below</h6>
          </div>
          <form action="" className="form-login">
            <input
              type="email"
              placeholder="Email or Phone Number"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <form action="" className="form-login">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="container-remember-me">
            <input type="checkbox" id="checkboxRemember" />
            <label>Remember me</label>
          </div>
          <div className="container-submit-login">
            <button
              type="sumbit"
              className="button-login"
              onClick={submitHandler}
            >
              Log In
              <div className="center-loading">{isLoading && <Loader />}</div>
            </button>
            <a href="">Forgot your password?</a>
          </div>

          <div className="container-dont-have-account">
            <p>Don&apos;t have an account?</p>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
