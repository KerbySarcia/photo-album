import { IKImage } from "imagekitio-react";

type Props = {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const Image = ({ path, alt, width, height, className }: Props) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      transformation={[
        {
          height: height,
          width: width,
        },
      ]}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
