import share from "../../../assets/images/bucket/menu/share.png";
import getLink from "../../../assets/images/bucket/menu/getLink.png";
import download from "../../../assets/images/bucket/menu/download.png";
import viewDetails from "../../../assets/images/bucket/menu/viewDetails.png";
import developerView from "../../../assets/images/bucket/menu/developerView.png";
import { client } from "../../../API/client";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export const Menu = ({ handleShare, filename, fileID, showMenuHandler }) => {
  const menuRef = useRef(null);
  const { apikey } = useSelector((state) => state.verifyUser);
  const downloadfile = () => {
    client(
      `files/download?${
        filename ? `filename=${filename}` : `fileid=${fileID}`
      }`,
      {
        headers: { "x-api-key": apikey },
      }
    ).then((res) => {
      console.log(res);
      const element = document.createElement("a");
      element.href = res.downloadURL;
      element.target = "_blank";
      element.download = `${
        res.downloadURL.split("https://node1.miststorage.com/")[1]
      }`;
      document.body.appendChild(element);
      element.click();
    });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      showMenuHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className="flex flex-col absolute top-[80px] right-0 z-10 bg-white shadow-[0px_4px_14px_0px_#6C6C6C40] w-full max-w-[192px] rounded-[15px] p-[16px]"
      ref={menuRef}
      onClick={handleClickOutside}
    >
      <ul>
        <li className="flex mb-[10px]">
          <img src={share} alt="Share" className="mr-[5px]"></img>
          <button onClick={handleShare}>Share</button>
        </li>
      </ul>
      <ul>
        <li className="flex mb-[10px]">
          <img src={getLink} alt="Get Link" className="mr-[5px]"></img>
          <button>Get Link</button>
        </li>
      </ul>
      <ul>
        <li className="flex mb-[10px]">
          <img src={download} alt="Download" className="mr-[5px]"></img>
          <button onClick={downloadfile}>Download</button>
        </li>
      </ul>
      <ul>
        <li className="flex mb-[10px]">
          <img src={viewDetails} alt="View details" className="mr-[5px]"></img>
          <button>View details</button>
        </li>
      </ul>
      <ul>
        <li className="flex mb-[10px]">
          <img
            src={developerView}
            alt="Developer View"
            className="mr-[5px]"
          ></img>
          <button>Developer View</button>
        </li>
      </ul>
    </div>
  );
};
