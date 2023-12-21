import { client } from "../API/client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useGetListFolderFiles = (dependency, id) => {
  const [filesInFolder, setFiles] = useState([]);
  const [status, setStatus] = useState("idle");
  const { apikey } = useSelector((state) => state.verifyUser);

  useEffect(
    () => {
      setStatus("loading");
      client(`folders/${id}/files`, {
        undefined,
        headers: { "x-api-key": apikey },
      }).then((res) => {
        setFiles(res?.files);
        setStatus("fulfilled");
      });
    },
    dependency === null ? [] : [dependency]
  );

  return [filesInFolder, status];
};
