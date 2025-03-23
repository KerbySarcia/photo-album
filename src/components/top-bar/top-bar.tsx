import UserButton from "../user-button/user-button";
import "./top-bar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="searchBar">
        <img src="/general/search.svg" alt="search" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
