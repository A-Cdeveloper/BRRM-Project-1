"use client";

import Image from "next/image";

interface ThumbnailsProps {
  images: string[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

export default function Thumbnails({
  images,
  currentIndex,
  onThumbnailClick,
}: ThumbnailsProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-2">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onThumbnailClick(index)}
          className="relative h-auto xl:h-[56px] group"
          aria-label={`View image ${index + 1}`}
        >
          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-full h-full object-cover rounded transition-all duration-200 ease-in-out ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
            width={800}
            height={600}
          />

          {/* Active indicator */}
          {index === currentIndex && (
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary" />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded transition-colors duration-200" />
        </button>
      ))}
    </div>
  );
}
