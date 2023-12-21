import { useEffect, useState } from "react";
import { client } from "../API/client";
import { useSelector } from "react-redux";

export const useGetBucket = (dependency) => {
  const [status, setStatus] = useState("idle");
  const [buckets, setBuckets] = useState([]);
  const { apikey } = useSelector((state) => state.verifyUser);

  useEffect(() => {
    setStatus("loading");
    client("bucket/fetch", {
      undefined,
      headers: { "x-api-key": apikey },
    }).then((res) => {
      setStatus("fulfilled");
      setBuckets(res?.buckets);
    });
  }, [dependency]);

  return [buckets, status];
};
