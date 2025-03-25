import { Link } from "react-router";
import "./gallery-item.css";
import Image from "../image/image";

type Props = {
  id: number;
  media: string;
  width: number;
  height: number;
};

const GalleryItem = ({ media, id, height, width }: Props) => {
  const optimizedHeight = (372 / height) * width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}
    >
      <Image
        path={media}
        alt={id.toString()}
        height={optimizedHeight}
        width={372}
      />
      <Link to={`/pin/${id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
