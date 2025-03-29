import { Link } from "react-router";
import "./gallery-item.css";
import Image from "../image/image";
import IPin from "../../interface/pin.interface";

const GalleryItem = ({ media, _id, height, width }: IPin) => {
  const optimizedHeight = (372 / height) * width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}
    >
      <Image
        src={media}
        alt={_id.toString()}
        height={optimizedHeight}
        width={372}
      />
      <Link to={`/pin/${_id}`} className="overlay" />
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
