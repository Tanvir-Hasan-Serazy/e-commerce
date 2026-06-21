"use client";
import { fallbackImage } from "@/utils/secrets";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

export const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  fallbackSrc,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImageSrc] = useState<ImageProps["src"]>(src || "/");
  return (
    <Image
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImageSrc(fallbackSrc || fallbackImage);
      }}
      width={width}
      height={height}
      {...rest}
    />
  );
};
