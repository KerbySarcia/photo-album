import { useNavigate, useSearchParams } from "react-router";
import UserButton from "../user-button/user-button";
import "./top-bar.css";
import { useState } from "react";

const TopBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/search?search=${searchValue}`);
  };
  return (
    <div className="topBar">
      <form onSubmit={handleSubmit} className="searchBar">
        <img src="/general/search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <UserButton />
    </div>
  );
};

export default TopBar;
