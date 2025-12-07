import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewMoreCard({ category, type }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/menu?cat=${category}&type=${type}`)}
      className="group bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-500 h-full min-h-[230px] flex flex-col items-center justify-center p-6 relative"
    >
      {/* Glow circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
      </div>

      {/* Icon */}
      <div className="relative mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all">
        <Sparkles size={30} className="text-white" />
      </div>

      <h3 className="relative text-white font-bold text-lg sm:text-xl mb-1">
        View More
      </h3>
      <p className="relative text-white/80 text-xs sm:text-sm mb-3">
        Explore all dishes
      </p>

      <div className="relative flex items-center gap-2 text-white group-hover:gap-4 transition-all">
        <span className="text-sm sm:text-base">Discover</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
