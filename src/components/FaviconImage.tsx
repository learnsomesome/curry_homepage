import { Image as ImageCpt } from "@nextui-org/react";
import { useEffect, useState } from "react";
import favorite from "../assets/favorite.svg";

const FaviconImage = ({ url }: { url: string }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const prefix = url.split("/")[0] + "//" + url.split("/")[2];

    const img = new Image();

    img.onerror = () => {
      setSrc(favorite);
    };

    img.onload = () => {
      setSrc(`${prefix}/favicon.ico`);
    };

    img.src = `${prefix}/favicon.ico`;
  }, [url]);

  return <ImageCpt showSkeleton width={20} height={20} src={src} />;
};

export default FaviconImage;
