import "./post-page.css";

import { Link } from "react-router";
import Image from "../../components/image/image";
import PostInteractions from "../../components/post-interactions/post-interactions";
import Comments from "../../components/comments/comments";

const PostPage = () => {
  return (
    <div className="postPage">
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
      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/pin1.jpeg" alt="" width={736} height={800} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className="postUser">
            <img src="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
