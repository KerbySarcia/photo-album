import { useState } from "react";
import "./user-button.css";
import useAuthStore from "../../utils/auth-store";
import { Link, useNavigate } from "react-router";
import apiRequest from "../../utils/api";

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser, removeCurrentUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="no-avatar" />
      <img
        onClick={() => setIsOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="general-arrow"
        className="arrow"
      />
      {isOpen ? (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <a href="/login" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
