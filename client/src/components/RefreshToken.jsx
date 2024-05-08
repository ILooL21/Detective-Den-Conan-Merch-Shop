import { useSelector, useDispatch } from "react-redux";
import { logout, setCredentials } from "../slices/authSlice";
import { useRefreshTokenMutation } from "../slices/usersApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RefreshToken = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const refresh = async () => {
      try {
        const res = await refreshToken({ id: userInfo._id }).unwrap();
        dispatch(setCredentials({ ...res }));
      } catch (err) {
        console.error(err);
      }
    };

    if (userInfo && userInfo.expiresAt < new Date().getTime()) {
      dispatch(logout());
      toast.error("Session expired, please login again");
    }

    if (userInfo && !isLoaded) {
      refresh();
      setIsLoaded(true);
    }
  }, [dispatch, refreshToken, userInfo, isLoaded]);
};

export default RefreshToken;
