import "./post-page.css";

import { Link, useParams } from "react-router";
import Image from "../../components/image/image";
import PostInteractions from "../../components/post-interactions/post-interactions";
import Comments from "../../components/comments/comments";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/api";

const PostPage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Pin not found!";
  console.log("data => ", data);
  return (
    <div className="postPage">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="20;0"
              />
            </path>
            <path
              stroke-dasharray="12"
              stroke-dashoffset="12"
              d="M3 12l7 7M3 12l7 -7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="12;0"
              />
            </path>
          </g>
        </svg>
      </Link>
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" width={736} />
        </div>
        <div className="postDetails">
          <PostInteractions postId={id as string} />
          <Link to={`/${data.user.username}`} className="postUser">
            <Image src={data.user.img || "/general/noAvatar.png"} alt="" />
            <span>{data.user.displayName}</span>
          </Link>
          <Comments id={data._id} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
