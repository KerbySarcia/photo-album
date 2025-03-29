import "./comments.css";
import apiRequest from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { IComment } from "../../interface/comment.interface";
import Comment from "./comment";
import CommentForm from "./commentForm";

type CommentsProps = {
  id: string;
};

const Comments = ({ id }: CommentsProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? "No comments" : data.length + " Comments"}
        </span>
        {/* COMMENT */}
        {data.map((comment: IComment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm id={id} />
    </div>
  );
};

export default Comments;
