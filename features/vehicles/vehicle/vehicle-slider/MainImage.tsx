"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Spinner } from "@/components/ui";
import { imageVariants } from "./variants";

type MainImageProps = {
  images: string[];
  currentIndex: number;
  direction: number;
  onImageClick: () => void;
  isLoading?: boolean;
};

export default function MainImage({
  images,
  currentIndex,
  direction,
  onImageClick,
  isLoading = false,
}: MainImageProps) {
  return (
    <div
      className="w-full min-h-[250px] md:min-h-[350px] lg:min-h-[250px] xl:min-h-[350px] 2xl:min-h-[445px] relative overflow-hidden cursor-pointer"
      onClick={onImageClick}
    >
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <Spinner />
        </div>
      )}

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="Vehicle"
            className="w-full h-full object-cover"
            width={800}
            height={445}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
