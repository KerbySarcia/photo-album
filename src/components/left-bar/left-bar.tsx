import { Link } from "react-router";
import "./left-bar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon ">
          <img src="/general/logo.png" className="logo" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="" />
        </a>
        <Link to="/create" className="menuIcon">
          <img src="/general/create.svg" alt="" />
        </Link>
        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
