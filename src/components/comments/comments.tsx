import EmojiPicker from "emoji-picker-react";
import "./comments.css";
import { useState } from "react";

type CommentsProps = {
  id: string;
};

const Comments = ({ id }: CommentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <form action="" className="commentForm">
          <input type="text" placeholder="Add a comment" />
          <div className="emoji">
            <div onClick={() => setIsOpen((prev) => !prev)}>😁</div>
            {isOpen && (
              <div className="emojiPicker">
                <EmojiPicker />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
