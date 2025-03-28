import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/api";
import "./post-interaction.css";

type InteractProps = {
  postId: string;
};

const interact = async (id: string, type: string) => {
  const res = await apiRequest.post(`/pins/interact/${id}`, { type });

  return res.data;
};

const PostInteractions = ({ postId }: InteractProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, type }: { id: string; type: string }) =>
      interact(id, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interactionCheck", postId] });
    },
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["interactionCheck", postId],
    queryFn: () =>
      apiRequest
        .get(`/pins/interaction-check/${postId}`)
        .then((res) => res.data),
  });

  if (isPending || error) return;

  return (
    <div className="postInteraction">
      <div className="interactionIcons">
        <img src="/general/react.svg" alt="" />
        273
        <img src="/general/share.svg" alt="" />
        <img src="/general/more.svg" alt="" />
      </div>
      <button
        disabled={mutation.isPending}
        onClick={() => mutation.mutate({ id: postId, type: "save" })}
      >
        {data.isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default PostInteractions;
