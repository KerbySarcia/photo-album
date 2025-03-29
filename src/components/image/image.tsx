import { IKImage } from "imagekitio-react";

type Props = {
  path?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  src?: string;
};

const Image = ({ path, src, alt, width, height, className }: Props) => {
  return (
    // @ts-expect-errorignore
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      src={src}
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
