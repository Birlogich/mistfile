import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyUser } from "../../../features/verifyUser-slice";
import { Spinner } from "../../UI/Spinner";
import { client } from "../../../API/client";
import { setClientSecretAction } from "../../../features/setClientSecret-slice";
import { setUserAutorization } from "../../../features/getAutorization-slice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [getParamsQuery, setParamsQuery] = useState({
    email: undefined,
    token: undefined,
  });
  const { apikey, status, subscription } = useSelector(
    (state) => state.verifyUser
  );
  const [apiKeyfromServer, setapiKeyfromServer] = useState(null);
  const [clientSecretFromServer, setClientSecretFromServer] = useState(null);
  const { clientSecret } = useSelector((state) => state.clientSecret);

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    const tokenFromQuery = searchParams.get("token");
    if (emailFromQuery && tokenFromQuery) {
      setParamsQuery({
        email: emailFromQuery,
        token: tokenFromQuery,
      });
    }
  }, []);

  useEffect(() => {
    if (
      getParamsQuery?.email !== undefined &&
      getParamsQuery?.token !== undefined
    ) {
      if (!apikey) {
        dispatch(verifyUser(getParamsQuery));
      }
    }
  }, [getParamsQuery]);

  useEffect(() => {
    setapiKeyfromServer(apikey);
  }, [apikey]);

  useEffect(() => {
    if (apiKeyfromServer) {
      client("accounts/authorize", {
        method: "POST",
        headers: { "x-api-key": apiKeyfromServer },
      }).then((res) => {
        setClientSecretFromServer(res.clientSecret);
      });
    } else {
      return;
    }
  }, [apiKeyfromServer]);

  useEffect(() => {
    if (clientSecretFromServer) {
      dispatch(setClientSecretAction(clientSecretFromServer));
    }
  }, [clientSecretFromServer]);

  useEffect(() => {
    if (clientSecretFromServer) {
      if (subscription?.length > 1) {
        dispatch(setUserAutorization(true));
        navigate("../");
      } else {
        navigate("../checkout");
      }
    }
  }, [clientSecretFromServer]);

  return (
    <div className="flex w-full h-full items-center justify-center">
      {status === "loading" && <Spinner />}
    </div>
  );
};
