"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    // If we're on a vehicle detail page, go back to vehicles list
    if (pathname.startsWith("/vehicles/") && pathname !== "/vehicles") {
      router.push("/vehicles");
    } else if (pathname === "/vehicles") {
      // If we're on vehicles list, go to home
      router.push("/");
    } else {
      // Otherwise use browser back
      router.back();
    }
  };

  return (
    <div
      onClick={handleGoBack}
      className="text-primary hover:text-primary-light space-x-[5px] text-lg mb-2 cursor-pointer"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Go back</span>
    </div>
  );
};

export default BackButton;
