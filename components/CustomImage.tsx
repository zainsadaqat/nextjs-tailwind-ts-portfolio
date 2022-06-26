import React from 'react';
import Image from 'next/image';

interface CustomImageI {
  src: string;
  className: string;
  width: number;
  height: number;
  alt: string;
}

const CustomImage = ({ src, className, width, height, alt }: CustomImageI) => {
  return (
    <Image
      src={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default CustomImage;
