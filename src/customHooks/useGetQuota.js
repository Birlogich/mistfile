import { useEffect, useState } from "react";
import { client } from "../API/client";

export const useGetQuota = () => {
  const [status, setStatus] = useState("idle");
  const [quotas, setQuotas] = useState([
    [1, 2, 3],
    [1, 2, 3],
  ]);

  /* 
  useEffect(() => {
    setStatus("loading");
    client("bucket/fetch", {
      undefined,
      headers: { "x-api-key": apikey },
    }).then((res) => {
      setStatus("fulfilled");
      setBuckets(res?.buckets);
    });
  }, [dependency]); */

  return [quotas, status];
};
