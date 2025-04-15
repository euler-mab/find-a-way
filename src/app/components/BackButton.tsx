"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Optional: use any icon library

const BackButton = ({ fallback = "/" }) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 hover:underline transition"
    >
      <ArrowLeft className="w-5 h-5" />
      Back
    </button>
  );
};

export default BackButton;
