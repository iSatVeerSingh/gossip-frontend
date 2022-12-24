import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetLoginStatusQuery } from "../../services/userAccountApi";
import { loginUserGlobal } from "../../services/userSlice";
import Loading from "../Loading/Loading";

const GlobalState = ({ children }) => {
  const { data, isError, isFetching, isSuccess, isUninitialized, error } =
    useGetLoginStatusQuery();

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUninitialized && isError) {
      if (error?.status === 401) {
        router.push("/account/login");
      } else {
        alert("Internal Server Error");
      }
    } else if (!isUninitialized && isSuccess) {
      dispatch(loginUserGlobal(data?.data));
    }
  }, [isFetching]);

  if (isUninitialized) {
    return <Loading />;
  }

  if (!isUninitialized && isFetching) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default GlobalState;
