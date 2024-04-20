import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import "../styles/RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Account created successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="container-register">
      <div className="image-auth-container">
        <img
          src="./src/assets/images/conan-gaya-auth.jpeg"
          alt="Conan"
          className="image-auth-register"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <div className="register-auth">
          <div>
            <h1>Create an account</h1>
            <h6>Enter your details below</h6>
          </div>
          <form
            action=""
            className="form-register">
            <input
              type="name"
              placeholder="Enter name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <form
            action=""
            className="form-register">
            <input
              type="email"
              placeholder="Email or Phone Number"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <form
            action=""
            className="form-register">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <form
            action=""
            className="form-register">
            <input
              type="confirmPassword"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
          <div className="container-submit-register">
            <button
              type="sumbit"
              className="button-register"
              onClick={submitHandler}>
              Create Account
              <div className="center-loading">{isLoading && <Loader />}</div>
            </button>
            <button
              type="sumbit"
              className="button-register-google">
              <img
                src="./src/assets/images/Google-Logo.png"
                alt="Google"
                className="image-google"
              />
              Sign up with Google
            </button>
          </div>

          <div className="container-dont-have-account">
            <p>Already have an account?</p>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
