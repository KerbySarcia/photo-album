import { useState } from "react";
import "./profile-page.css";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";
import apiRequest from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { User } from "../../interface/user.interface";
import FollowButton from "./follow-button";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery<User>({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";

  return (
    <div className="profilePage">
      <img className="profileImage" src={data.img} alt="" />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="profileCounts">
        {" "}
        {data.followingCount} followers - {data.followingCount} followings
      </div>
      <div className="profileInteractions">
        <img src="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.username}
          />
        </div>
        <img src="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? (
        <Gallery boardId={null} search={null} userId={data._id} />
      ) : (
        <Collections userId={data._id} />
      )}
    </div>
  );
};

export default ProfilePage;
