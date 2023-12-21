import { useEffect, useState } from "react";
import { useGetBucket } from "./useGetBucket";
import { useParams } from "react-router-dom";

export const useGetCurrentBucket = () => {
  const { id } = useParams();
  const [buckets] = useGetBucket();
  const [currentBucket, setCurrentBucket] = useState({});

  useEffect(() => {
    const getCurrentBucket = (folderId) => {
      return buckets?.find((bucket) => bucket._id === folderId);
    };
    const currentBucketFromServer = getCurrentBucket(id);
    setCurrentBucket(currentBucketFromServer);
  }, [buckets]);

  return [currentBucket];
};
