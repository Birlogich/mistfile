import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { client } from "../API/client";

export const useSetSubscriptionType = () => {
  const { apikey } = useSelector((state) => state.verifyUser);

  useEffect(() => {
    client("accounts/subscribe/", {
      undefined,
      headers: { "x-api-key": apikey },
    }).then((res) => {
      console.log(res);
    });
  }, []);
};
