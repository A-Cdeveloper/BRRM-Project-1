"use client";

import { Spinner } from "@/components/ui";
import { useState } from "react";

const Map = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="aspect-square md:aspect-video w-full mb-2 lg:mb-0 relative"
      role="region"
      aria-label="Company location map"
    >
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-2xl"
          aria-hidden="true"
        >
          <Spinner />
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13849877.776483908!2d5.770389033528424!3d38.003056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a32d96cefaff%3A0x88d41e636d5bc74c!2sAutohouse%20Katsadramis!5e1!3m2!1sen!2srs!4v1755678886384!5m2!1sen!2srs"
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allowFullScreen
        title="Autohouse Katsadramis location on Google Maps"
        aria-label="Interactive map showing company location"
      />
    </div>
  );
};

export default Map;
