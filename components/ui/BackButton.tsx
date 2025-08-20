"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
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
