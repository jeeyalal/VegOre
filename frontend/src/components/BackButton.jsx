import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    // If user came from another page in history
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      // No history → go to home page
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="
        group
        inline-flex items-center justify-center gap-2
        px-3 py-2 sm:px-4 sm:py-2.5
        bg-white
        border-2 border-gray-200
        rounded-lg sm:rounded-xl
        text-gray-700 hover:text-emerald-600
        hover:border-emerald-500
        text-xs sm:text-sm font-semibold
        mt-0 mb-1
        shadow-sm hover:shadow-md
        transition-all duration-300
        w-auto
        min-w-[80px] sm:min-w-[100px]
      "
    >
      <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
      <span className="whitespace-nowrap">Back</span>
    </button>
  );
}
