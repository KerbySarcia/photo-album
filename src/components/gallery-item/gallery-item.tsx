import { Link } from "react-router";
import "./gallery-item.css";

type Props = {
  id: number;
  media: string;
  width: number;
  height: number;
};

const GalleryItem = ({ media, id, height }: Props) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}
    >
      <img src={media} alt={`${id}-image`} />
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
