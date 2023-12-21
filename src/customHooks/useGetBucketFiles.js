import { useEffect, useState } from "react";
import { client } from "../API/client";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useGetBucketFiles = (dependency) => {
  const [status, setStatus] = useState("idle");
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const { id } = useParams();
  const { apikey } = useSelector((state) => state.verifyUser);

  useEffect(() => {
    setStatus("loading");
    if (id.length > 6) {
      client(`bucket/list/${id}`, {
        undefined,
        headers: { "x-api-key": apikey },
      }).then((res) => {
        setFolders(res?.folders);
        setFiles(res?.files);
        setStatus("fulfilled");
      });
    }
  }, [dependency]);

  return [status, folders, files];
};
