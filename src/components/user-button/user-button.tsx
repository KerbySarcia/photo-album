import { useState } from "react";
import "./user-button.css";

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Temp
  const currentUser = true;

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
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      ) : null}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
