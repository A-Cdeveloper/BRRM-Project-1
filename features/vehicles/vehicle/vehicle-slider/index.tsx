"use client";

import { useState, useCallback } from "react";
import MainImage from "./MainImage";
import Thumbnails from "./Thumbnails";
import Lightbox from "./Lightbox";
import { VehiclePhoto } from "@/types";

interface VehicleImageSliderProps {
  images: string[];
  photos?: VehiclePhoto[]; // Optional: if we have full VehiclePhoto objects
  isLoading?: boolean; // Loading state for photos
}

export default function VehicleImageSlider({
  images,
  photos,
  isLoading = false,
}: VehicleImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageChange = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex((newIndex + images.length) % images.length);
    },
    [currentIndex, images.length]
  );

  const handleThumbnailClick = useCallback(
    (index: number) => {
      handleImageChange(index);
    },
    [handleImageChange]
  );

  const handleMainImageClick = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  // Use thumbnail URLs if available, otherwise use main image URLs
  const thumbnailImages =
    photos && photos.length > 0
      ? photos.map((photo) => photo.thumbnailUrl)
      : images;

  return (
    <>
      <div className="w-full lg:w-[50%] mb-0 lg:mb-2 relative">
        {/* Glavna slika */}
        <MainImage
          images={images}
          currentIndex={currentIndex}
          direction={direction}
          onImageClick={handleMainImageClick}
          isLoading={isLoading}
        />

        {/* Thumbnails - only show if there are multiple images */}
        {thumbnailImages && thumbnailImages.length > 1 && (
          <Thumbnails
            images={thumbnailImages}
            currentIndex={currentIndex}
            onThumbnailClick={handleThumbnailClick}
          />
        )}
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
