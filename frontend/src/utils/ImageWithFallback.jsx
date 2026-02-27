"use client";
import Image from "next/image";
import { useState } from "react";

export const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImageSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImageSrc(fallbackSrc);
      }}
    />
  );
};
