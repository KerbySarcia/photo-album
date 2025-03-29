import { IComment } from "../../interface/comment.interface";
import { format } from "timeago.js";

type CommentProps = {
  comment: IComment;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="comment">
      <img src={comment.user.img || "/general/noAvatar.png"} alt="" />
      <div className="commentContent">
        <span className="commentUsername">{comment.user.displayName}</span>
        <p className="commentText">{comment.description}</p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
