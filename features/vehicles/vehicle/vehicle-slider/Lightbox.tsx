"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { imageVariants } from "./variants";
import FontAwesomeIcon from "@/components/ui/FontAwesomeIcon";
import Modal from "@/components/ui/Modal";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//////////////////////////////////////////////

type LightboxButtonsProps = {
  icon: IconProp;
  onClick: () => void;
  ariaLabel: string;
  tabIndex: number;
  classname?: string;
};

const LightboxButtons = ({
  icon,
  onClick,
  ariaLabel,
  tabIndex,
  classname,
}: LightboxButtonsProps) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        classname={`text-white opacity-50 hover:opacity-100 hover:text-white transition-opacity duration-200 ${classname}`}
        onClick={onClick}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      />
    </div>
  );
};

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
    >
      {/* Close button */}
      <div className="absolute top-2 right-2">
        <LightboxButtons
          icon={faTimes}
          onClick={onClose}
          ariaLabel="Close lightbox"
          tabIndex={0}
          classname="text-[25px]"
        />
      </div>

      {/* Left arrow */}
      <div className="absolute left-6">
        <LightboxButtons
          icon={faChevronLeft}
          onClick={goToPrevious}
          ariaLabel="Previous image"
          tabIndex={0}
          classname="text-[35px]"
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
        <LightboxButtons
          icon={faChevronRight}
          onClick={goToNext}
          ariaLabel="Next image"
          tabIndex={0}
          classname="text-[35px]"
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </Modal>
  );
}
