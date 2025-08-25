import { Variants } from "framer-motion";

// Fast slide animation for main gallery
export const imageVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 1,
    position: "absolute", // Uvek absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "absolute", // Uvek absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 1,
    position: "absolute", // Uvek absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  }),
};

// Fast fade animation for lightbox
export const lightboxVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 1,
    position: "absolute",
  },
  center: {
    opacity: 1,
    scale: 1,
    position: "relative",
    transition: { duration: 0.15, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 1,
    position: "absolute",
    transition: { duration: 0.15, ease: "easeOut" },
  },
};
