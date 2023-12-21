import { Outlet } from "react-router-dom";
import { Sidebar } from "./Bucket/Sidebar/Sidebar";
import { BurgerMenu } from "./Bucket/Sidebar/BurgerMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Layout = () => {
  const { autorization } = useSelector((state) => state.userAutorization);
  const [authorized, isAuthorized] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth || null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autorization === true) {
      isAuthorized(true);
    }
  }, [autorization]);

  return (
    <div className={`flex${authorized ? "" : "flex-col"} w-full h-screen`}>
      {windowSize >= 600 && authorized && <Sidebar />}
      <Outlet />
    </div>
  );
};
