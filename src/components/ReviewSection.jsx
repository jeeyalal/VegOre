import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Aarav Mehta",
      img: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Absolutely loved the healthy meals! Fresh ingredients and delicious taste. Perfect for my busy schedule.",
    },
    {
      name: "Riya Sharma",
      img: "https://i.pravatar.cc/150?img=32",
      rating: 4,
      text: "VegOre's vegan meals are the best! Light, tasty, and perfectly portioned.",
    },
    {
      name: "Kunal Patel",
      img: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      text: "Smoothies are AMAZING! Great flavors and super refreshing after workouts.",
    },
    {
      name: "Sara Thomas",
      img: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      text: "Very fast delivery and excellent quality. The Jain meals are perfectly prepared.",
    },
    {
      name: "Arjun Singh",
      img: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Outstanding service and quality! The meals are always fresh and delicious.",
    },
    {
      name: "Priya Desai",
      img: "https://i.pravatar.cc/150?img=47",
      rating: 4,
      text: "Love the variety and taste. Makes healthy eating so much easier!",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="mt-16 py-14 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-2 my-3">
            <span className="w-16 h-1 bg-green-600 rounded-full"></span>
            
            <span className="w-16 h-1 bg-green-600 rounded-full"></span>
          </div>

          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their daily meals
          </p>
        </div>

        {/* Reviews */}
        {isMobile ? (
          <AutoScrollReviews reviews={reviews} />
        ) : (
          <DesktopReviews reviews={reviews} />
        )}
      </div>
    </section>
  );
}

/* ----------------------------------------------------
   AUTO SCROLL (MOBILE)
---------------------------------------------------- */
function AutoScrollReviews({ reviews }) {
  const scrollRef = useRef();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;

    const loop = () => {
      if (!paused) {
        pos += 0.6;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [paused]);

  const doubled = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden">
      {/* left & right fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-green-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-50 to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {doubled.map((rev, i) => (
          <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[380px]">
            <ReviewCard review={rev} />
          </div>
        ))}
      </div>

      <p className="text-center mt-3 text-xs text-gray-500">
        Hold to pause scrolling
      </p>
    </div>
  );
}

/* ----------------------------------------------------
   DESKTOP GRID
---------------------------------------------------- */
function DesktopReviews({ reviews }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {reviews.map((rev, i) => (
        <ReviewCard review={rev} key={i} />
      ))}
    </div>
  );
}

/* ----------------------------------------------------
   REVIEW CARD
---------------------------------------------------- */
function ReviewCard({ review }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 relative overflow-hidden h-full flex flex-col">

      {/* Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition duration-500 -mr-16 -mt-16"></div>

      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition">
        <Quote size={48} className="text-green-600" />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 z-10 mb-4">
        <div className="relative">
          <img
            src={review.img}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-green-400 group-hover:ring-green-600 transition"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition">
            {review.name}
          </h3>

          <div className="flex gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < review.rating ? "#facc15" : "none"}
                stroke={i < review.rating ? "#facc15" : "#d1d5db"}
                className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-600 italic z-10 text-sm sm:text-base leading-relaxed flex-grow">
        "{review.text}"
      </p>

      {/* Accent bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
    </div>
  );
}
