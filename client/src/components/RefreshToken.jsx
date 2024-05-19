import { useSelector, useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../slices/usersApiSlice";
import { useEffect } from "react";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

const RefreshToken = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [refreshTokenMutation] = useRefreshTokenMutation();

  useEffect(() => {
    const refreshToken = async () => {
      if (!userInfo) return;
      try {
        const response = await refreshTokenMutation({ id: userInfo._id });
        if (response.data.message === "You are not logged in") {
          dispatch(logout());
          toast.error("Session expired, please login again");
          return;
        }
      } catch (err) {
        console.error(err);
        dispatch(logout());
        toast.error("Session expired, please login again");
        return;
      }
    };
    refreshToken();
  }, [dispatch, refreshTokenMutation, userInfo]);
};

export default RefreshToken;
