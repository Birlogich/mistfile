import { useParams } from "react-router-dom";
import { useGetListFolders } from "./useGetListFolders";
import { useEffect, useState } from "react";

export const useGetCurrentFolder = () => {
  const [folders] = useGetListFolders();
  const { folderId } = useParams();
  const [currentFolder, setCurrentFolder] = useState({});

  useEffect(() => {
    const getCurrentFolder = (folderId) => {
      return folders?.find((folder) => folder._id === folderId);
    };
    const currentFolderFromServer = getCurrentFolder(folderId);
    setCurrentFolder(currentFolderFromServer);
  }, [folders]);

  return [currentFolder];
};
