import { useQuery } from "@tanstack/react-query";
import Image from "../image/image";
import "./collections.css";
import { IBoard } from "../../interface/board.interface";
import apiRequest from "../../utils/api";
import { Link } from "react-router";
import { format } from "timeago.js";

type CollectionsProps = {
  userId: string;
};

const Collections = ({ userId }: CollectionsProps) => {
  const { isPending, error, data } = useQuery<IBoard[]>({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="collections">
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className="collection"
          key={board._id}
        >
          <Image src={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins · {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
