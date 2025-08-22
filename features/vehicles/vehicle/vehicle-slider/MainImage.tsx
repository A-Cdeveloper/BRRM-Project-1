"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { imageVariants } from "./variants";

type MainImageProps = {
  images: string[];
  currentIndex: number;
  direction: number;
  onImageClick: () => void;
};

export default function MainImage({
  images,
  currentIndex,
  direction,
  onImageClick,
}: MainImageProps) {
  return (
    <div
      className="w-full min-h-[250px] md:min-h-[350px] lg:min-h-[250px] xl:min-h-[350px] 2xl:min-h-[445px] relative overflow-hidden cursor-pointer"
      onClick={onImageClick}
    >
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
