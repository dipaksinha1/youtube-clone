import { Outlet } from "react-router-dom";
import SiderBar from "./Sidebar";

const Body = () => {
  return <div className="flex w-full">
    <SiderBar/>
    <Outlet/>
  </div>
};

export default Body;