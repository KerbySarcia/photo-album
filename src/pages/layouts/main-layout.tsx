import { Outlet } from "react-router";
import LeftBar from "../../components/left-bar/left-bar";
import TopBar from "../../components/top-bar/top-bar";
import "./main-layout.css";

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
