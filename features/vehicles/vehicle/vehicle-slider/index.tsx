"use client";

import { useState } from "react";
import MainImage from "./MainImage";
import Thumbnails from "./Thumbnails";
import Lightbox from "./Lightbox";

export default function VehicleImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageChange = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex((newIndex + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    handleImageChange(index);
  };

  const handleMainImageClick = () => {
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="w-full lg:w-[50%] mb-0 lg:mb-2 relative">
        {/* Glavna slika */}
        <MainImage
          images={images}
          currentIndex={currentIndex}
          direction={direction}
          onImageClick={handleMainImageClick}
        />

        {/* Thumbnails */}
        <Thumbnails
          images={images}
          currentIndex={currentIndex}
          onThumbnailClick={handleThumbnailClick}
        />
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        initialIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        isOpen={lightboxOpen}
      />
    </>
  );
}
