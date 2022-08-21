import { Image as ImageCpt } from "@nextui-org/react";
import { useEffect, useState } from "react";
import website from "../assets/website.svg";

const FaviconImage = ({
  url,
  render = true,
}: {
  url: string;
  render?: boolean;
}) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (render) {
      const prefix = url.split("/")[0] + "//" + url.split("/")[2];

      const img = new Image();

      img.onerror = () => {
        setSrc(website);
      };

      img.onload = () => {
        setSrc(`${prefix}/favicon.ico`);
      };

      img.src = `${prefix}/favicon.ico`;
    }
  }, [url, render]);

  return <ImageCpt width={20} height={20} src={src} />;
};

export default FaviconImage;
