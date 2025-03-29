import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/api";

const followUser = async (username: string) => {
  const res = await apiRequest.post(`/users/follow/${username}`);
  return res.data;
};

type FollowButtonProps = {
  isFollowing: boolean;
  username: string;
};

const FollowButton = ({ isFollowing, username }: FollowButtonProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
    },
  });

  return (
    <button
      onClick={() => mutation.mutate(username)}
      disabled={mutation.isPending}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
