"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import { createPortal } from "react-dom";
import { imageVariants } from "./variants";
import FontAwesomeIcon from "@/components/ui/FontAwesomeIcon";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type LightboxProps = {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
};

export default function Lightbox({
  images,
  initialIndex = 0,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const changeImage = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex((newIndex + images.length) % images.length);
  };

  const goToPrevious = () => {
    changeImage((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    changeImage((currentIndex + 1) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, currentIndex, images.length]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center p-4"
      >
        {/* Close button */}
        <div className="absolute top-6 right-6">
          <FontAwesomeIcon
            icon={faTimes}
            classname="text-3xl text-white hover:text-gray-300 transition-colors duration-200"
            onClick={onClose}
            aria-label="Close lightbox"
            tabIndex={0}
          />
        </div>

        {/* Left arrow */}
        <div className="absolute left-6">
          <FontAwesomeIcon
            icon={faChevronLeft}
            classname="text-4xl text-white hover:text-gray-300 transition-colors duration-200"
            onClick={goToPrevious}
            aria-label="Previous image"
            tabIndex={0}
          />
        </div>

        {/* Slika */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-5xl w-[90%] max-h-[75vh] flex justify-center relative"
          >
            <Image
              src={images[currentIndex]}
              alt={`Lightbox Image ${currentIndex + 1}`}
              className="w-auto h-auto max-h-[75vh] rounded-lg shadow-xl"
              width={1200}
              height={800}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Right arrow */}
        <div className="absolute right-6">
          <FontAwesomeIcon
            icon={faChevronRight}
            classname="text-4xl text-white hover:text-gray-300 transition-colors duration-200"
            onClick={goToNext}
            aria-label="Next image"
            tabIndex={0}
          />
        </div>

        {/* Image counter */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
