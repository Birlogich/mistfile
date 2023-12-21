import { client } from "../API/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useGetReferralBalance = () => {
  const { apikey } = useSelector((state) => state.verifyUser);

  const [userBalans, setUserBalans] = useState("");

  useEffect(() => {
    client("accounts/refer/balance", {
      headers: { "x-api-key": apikey },
    }).then((res) => {
      setUserBalans(res?.balance);
    });
  }, []);

  return [userBalans];
};
