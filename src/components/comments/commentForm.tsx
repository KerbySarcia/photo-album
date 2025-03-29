import EmojiPicker from "emoji-picker-react";
import { FormEvent, useState } from "react";
import apiRequest from "../../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TAddCommentType = {
  description: string;
  pin: string;
};

const addComment = async (comment: TAddCommentType) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
};

type CommentFormProps = {
  id: string;
};

const CommentForm = ({ id }: CommentFormProps) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      description: desc,
      pin: id,
    });
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <div className="emoji">
        <div onClick={() => setOpen((prev) => !prev)}>😊</div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
