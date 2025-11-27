// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Weight Loss Program",
//       subtitle: "Achieve your weight loss goals in 12 weeks",
//       btn: "Start Now",
//       gradient: "from-emerald-600 via-green-600 to-teal-700",
//       img: "https://i.imgur.com/bxJhY2x.png",
//       accent: "bg-lime-400",
//     },
//     {
//       title: "Healthy Subscription Meals",
//       subtitle: "Fresh Veg, Vegan & Jain meals delivered daily",
//       btn: "Subscribe",
//       gradient: "from-green-500 via-emerald-600 to-green-700",
//       img: "https://i.imgur.com/A1bTMiJ.png",
//       accent: "bg-yellow-300",
//     },
//     {
//       title: "Detox Smoothies",
//       subtitle: "Cleanse your body with delicious natural smoothies",
//       btn: "Order Now",
//       gradient: "from-teal-600 via-emerald-700 to-green-800",
//       img: "https://i.imgur.com/1ZQ7c7P.png",
//       accent: "bg-lime-300",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <div className="w-full mt-4 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">

//       <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
        
//         {/* Slides */}
//         <div className="relative w-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`w-full transition-all duration-700 ease-in-out ${
//                 index === currentSlide
//                   ? "opacity-100 relative"
//                   : "opacity-0 absolute top-0 left-0 pointer-events-none"
//               }`}
//             >
//               <div
//                 className={`w-full min-h-[330px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] p-6 sm:p-10 flex flex-col justify-center items-center bg-gradient-to-br ${slide.gradient} text-white relative overflow-hidden`}
//               >
//                 {/* Soft background circles */}
//                 <div className="absolute top-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-white opacity-[0.06] rounded-full translate-x-20 -translate-y-20 blur-xl"></div>
//                 <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-white opacity-[0.06] rounded-full -translate-x-32 translate-y-32 blur-xl"></div>

//                 {/* Image */}
//                 <div className="relative z-10 mb-4 sm:mb-6 hover:scale-105 transition-transform duration-500">
//                   <img
//                     src={slide.img}
//                     alt={slide.title}
//                     className="w-32 sm:w-48 md:w-64 drop-shadow-2xl"
//                   />
//                 </div>

//                 {/* Text */}
//                 <h2 className="text-2xl sm:text-4xl font-bold text-center drop-shadow-xl">
//                   {slide.title}
//                 </h2>

//                 <p className="text-sm sm:text-lg opacity-95 mt-2 text-center max-w-md">
//                   {slide.subtitle}
//                 </p>

//                 {/* Button */}
//                 <a
//                   href="/subscription"
//                   className={`mt-5 px-6 sm:px-10 py-2 sm:py-3 ${slide.accent} text-green-900 rounded-full text-sm sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all`}
//                 >
//                   {slide.btn}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="hidden xs:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all"
//         >
//           <ChevronLeft className="text-white w-6 h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="hidden xs:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all"
//         >
//           <ChevronRight className="text-white w-6 h-6" />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`rounded-full transition-all ${
//                 index === currentSlide
//                   ? "w-8 h-2 bg-white"
//                   : "w-2 h-2 bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }







import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const slides = [
    {
      title: "Weight Loss Program",
      subtitle: "Achieve your weight loss goals in 12 weeks",
      btn: "Start Now",
      gradient: "from-emerald-600 via-green-600 to-teal-700",
      img: "https://i.imgur.com/bxJhY2x.png",
      accent: "bg-lime-400",
    },
    {
      title: "Healthy Subscription Meals",
      subtitle: "Fresh Veg, Vegan & Jain meals delivered daily",
      btn: "Subscribe",
      gradient: "from-green-500 via-emerald-600 to-green-700",
      img: "https://i.imgur.com/A1bTMiJ.png",
      accent: "bg-yellow-300",
    },
    {
      title: "Detox Smoothies",
      subtitle: "Cleanse your body with delicious natural smoothies",
      btn: "Order Now",
      gradient: "from-teal-600 via-emerald-700 to-green-800",
      img: "https://i.imgur.com/1ZQ7c7P.png",
      accent: "bg-lime-300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => setCurrentSlide(index);

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Swipe Handling
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isSwipe = Math.abs(distance) > 60;

    if (isSwipe) {
      if (distance > 0) nextSlide(); // swipe left
      else prevSlide();             // swipe right
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="w-full mt-4 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Slides */}
        <div className="relative w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 relative"
                  : "opacity-0 absolute top-0 left-0 pointer-events-none"
              }`}
            >
              <div
                className={`w-full min-h-[330px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] p-6 sm:p-10 flex flex-col justify-center items-center bg-gradient-to-br ${slide.gradient} text-white relative overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-white opacity-[0.06] rounded-full translate-x-20 -translate-y-20 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-white opacity-[0.06] rounded-full -translate-x-32 translate-y-32 blur-xl"></div>

                {/* Image */}
                <div className="relative z-10 mb-4 sm:mb-6 hover:scale-105 transition-transform duration-500">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-32 sm:w-48 md:w-64 drop-shadow-2xl"
                  />
                </div>

                {/* Text */}
                <h2 className="text-2xl sm:text-4xl font-bold text-center drop-shadow-xl">
                  {slide.title}
                </h2>

                <p className="text-sm sm:text-lg opacity-95 mt-2 text-center max-w-md">
                  {slide.subtitle}
                </p>

                {/* Button */}
                <a
                  href="/subscription"
                  className={`mt-5 px-6 sm:px-10 py-2 sm:py-3 ${slide.accent} text-green-900 rounded-full text-sm sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all`}
                >
                  {slide.btn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="hidden xs:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden xs:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

