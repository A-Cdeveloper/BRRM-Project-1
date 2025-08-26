"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { lightboxVariants } from "./variants";
import { Modal, IconButton } from "@/components/ui";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/////////////////////////////////////////////////
type LightboxProps = {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  isOpen: boolean;
};

export default function Lightbox({
  images,
  initialIndex = 0,
  onClose,
  isOpen,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  // Update currentIndex when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const changeImage = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex((newIndex + images.length) % images.length);
    },
    [currentIndex, images.length]
  );

  const goToPrevious = useCallback(() => {
    changeImage((currentIndex - 1 + images.length) % images.length);
  }, [changeImage, currentIndex, images.length]);

  const goToNext = useCallback(() => {
    changeImage((currentIndex + 1) % images.length);
  }, [changeImage, currentIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, goToPrevious, goToNext]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="w-full h-full flex flex-col items-center justify-center"
      closeOnEscape={true}
      closeOnBackdropClick={false}
      aria-label="Image lightbox"
      aria-describedby="lightbox-description"
    >
      <div id="lightbox-description" className="sr-only">
        Image {currentIndex + 1} of {images.length}
      </div>

      {/* Close button */}
      <div className="absolute top-2 right-2 z-20">
        <IconButton
          icon={faTimes}
          onClick={onClose}
          ariaLabel="Close lightbox"
          tabIndex={0}
          classname="text-[25px]"
        />
      </div>

      {/* Left arrow - Desktop only */}
      <div className="hidden md:block absolute left-6 z-20">
        <IconButton
          icon={faChevronLeft}
          onClick={goToPrevious}
          ariaLabel="Previous image"
          tabIndex={0}
          classname="text-[35px]"
        />
      </div>

      {/* Right arrow - Desktop only */}
      <div className="hidden md:block absolute right-6 z-20">
        <IconButton
          icon={faChevronRight}
          onClick={goToNext}
          ariaLabel="Next image"
          tabIndex={0}
          classname="text-[35px]"
        />
      </div>

      {/* Slika */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          variants={lightboxVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="max-w-5xl w-[85%] sm:w-[90%] max-h-[70vh] sm:max-h-[75vh] flex justify-center relative z-10"
        >
          <Image
            src={images[currentIndex]}
            alt={`Lightbox Image ${currentIndex + 1}`}
            className="w-auto h-auto max-h-[70vh] sm:max-h-[75vh]"
            width={1200}
            height={800}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Mobile Navigation Arrows - Below Image */}
      <div className="md:hidden flex justify-center items-center gap-8 mt-4 z-20">
        <IconButton
          icon={faChevronLeft}
          onClick={goToPrevious}
          ariaLabel="Previous image"
          tabIndex={0}
          classname="text-[30px] bg-secondary/50 rounded-full p-1.5"
        />
        <IconButton
          icon={faChevronRight}
          onClick={goToNext}
          ariaLabel="Next image"
          tabIndex={0}
          classname="text-[30px] bg-secondary/50 rounded-full p-1.5"
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </Modal>
  );
}
