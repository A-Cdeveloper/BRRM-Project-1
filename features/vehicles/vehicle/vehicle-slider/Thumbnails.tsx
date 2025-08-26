"use client";

import Image from "next/image";

type ThumbnailsProps = {
  images: string[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
};

const Thumbnails = ({
  images,
  currentIndex,
  onThumbnailClick,
}: ThumbnailsProps) => {
  return (
    <div className="flex gap-2 mt-2 overflow-x-auto">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onThumbnailClick(index)}
          className={`flex-shrink-0 w-16 h-16 border-2 rounded overflow-hidden ${
            index === currentIndex
              ? "border-primary"
              : "border-gray-600 hover:border-gray-400"
          }`}
        >
          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default Thumbnails;
