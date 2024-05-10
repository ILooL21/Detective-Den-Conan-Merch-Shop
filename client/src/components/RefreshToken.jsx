import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RefreshToken = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.expiresAt < new Date().getTime()) {
      dispatch(logout());
      toast.error("Session expired, please login again");
    }
  });
};

export default RefreshToken;
