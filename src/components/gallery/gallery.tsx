import GalleryItem from "../gallery-item/gallery-item";
import "./gallery.css";
import IPin from "../../interface/pin.interface";
import Skeleton from "../skeleton/skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/api";

type FetchPinsProps = {
  pageParam: number;
  search: string | null;
  userId: string | null;
  boardId: string | null;
};

const fetchPins = async ({
  pageParam,
  search,
  userId,
  boardId,
}: FetchPinsProps) => {
  const res = await apiRequest.get(
    `/pins?cursor=${pageParam}&search=${search || ""}&userId=${
      userId || ""
    }&boardId=${boardId || ""}`
  );
  return res.data as { nextCursor: number; pins: IPin[] };
};

type GalleryProps = {
  search: string | null;
  userId: string | null;
  boardId: string | null;
};

const Gallery = ({ search = "", userId = "", boardId = "" }: GalleryProps) => {
  const { data, fetchNextPage, hasNextPage, status, isLoading, isPending } =
    useInfiniteQuery({
      queryKey: ["pins", search, userId, boardId],
      queryFn: async ({ pageParam = 0 }) =>
        await fetchPins({ pageParam, search, userId, boardId }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  if (isLoading || isPending) return <Skeleton />;
  if (status === "error") return "Something went wrong...";
  const allPins =
    data?.pages.flatMap((page: { pins: IPin[] }) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All Posts Loaded!</h3>}
    >
      <div className="gallery">
        {allPins?.map((item: IPin) => (
          <GalleryItem key={item._id} {...item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
