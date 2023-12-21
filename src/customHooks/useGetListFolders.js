import { client } from "../API/client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useGetListFolders = () => {
  const [folders, setFolders] = useState([]);
  const [status, setStatus] = useState("idle");
  const { apikey } = useSelector((state) => state.verifyUser);

  useEffect(() => {
    setStatus("loading");
    client("folders/list", {
      undefined,
      headers: { "x-api-key": apikey },
    }).then((res) => {
      setFolders(res?.folders);
    });
  }, []);

  return [folders, status];
};
