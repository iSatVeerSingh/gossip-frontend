import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetLoginStatusQuery } from "../../services/userAccountApi";
import { loginUserGlobal } from "../../services/userSlice";
import Loading from "../Loading/Loading";

const GlobalState = ({ children }) => {
  // const router = useRouter();

  // const dispatch = useDispatch();

  // const { data, isError, isFetching, isSuccess, isUninitialized, error } =
  //   useGetLoginStatusQuery("", {
  //     skip:
  //       router.pathname === "/account/login" ||
  //       router.pathname === "/account/signup",
  //   });

  // useEffect(() => {
  //   if (!isUninitialized && isError) {
  //     router.push("/account/login");
  //     return;
  //   }

  //   if (!isUninitialized && isSuccess) {
  //     dispatch(loginUserGlobal(data?.data));
  //   }
  // }, [isFetching]);

  // if (isUninitialized) {
  //   return <Loading />;
  // }

  // if (!isUninitialized) {
  //   if (isFetching) {
  //     return <Loading />;
  //   }
  //   if (isError) {
  //     router.push("/account/login");
  //     return;
  //   }
  // }

  return <>{children}</>;
};

export default GlobalState;
