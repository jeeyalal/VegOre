export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen pt-7 pb-16">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-4 text-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 leading-snug">
          About <span className="text-emerald-600">VegOre</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Healthy. Tasty. High-Protein. Pure Veg.  
          VegOre delivers fresh, macro-balanced meals designed for your fitness and wellness goals.
        </p>
      </div>

      {/* SECTION 1: WHO WE ARE */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=900"
          alt="VegOre Story"
          className="w-full rounded-2xl shadow-xl object-cover h-56 sm:h-64 md:h-72"
        />

        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Who We Are</h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            VegOre is a modern, health-focused vegetarian food brand delivering 
            <strong> fresh, macro-balanced, high-protein meals </strong> across the city.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Every meal is crafted by nutrition experts and cooked by trained chefs — 
            designed for weight-loss, muscle gain, clean vegan eating, and balanced daily meals.
          </p>
        </div>
      </div>

      {/* SECTION 2: OUR STORY */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            VegOre began with a simple idea — 
            <span className="font-semibold text-green-700"> healthy food should be affordable, tasty, and easy to maintain daily. </span>
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            People struggle with long cooking hours, nutritional confusion, inconsistent diets, 
            and unhealthy takeout. We created a solution — 
            <strong> vegetarian, vegan, and Jain meals </strong> delivered fresh daily.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Today, VegOre is the trusted meal partner for professionals, students, families, 
            and fitness enthusiasts.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900"
          alt="Mission"
          className="w-full rounded-2xl shadow-xl object-cover h-56 sm:h-64 md:h-72"
        />
      </div>

      {/* SECTION 3: MISSION */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Our Mission
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center">
            Our mission is to make healthy eating simple, accessible, and exciting for everyone.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
            <li>🌱 Fresh, preservative-free meals</li>
            <li>🍽️ Veg, Vegan & Jain-friendly options</li>
            <li>💪 High-protein meals to support fitness goals</li>
            <li>🚚 Consistent on-time daily delivery</li>
            <li>❤️ A perfect blend of taste + nutrition + convenience</li>
          </ul>
        </div>
      </div>

      {/* SECTION 4: WHY WE STARTED */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Why We Started VegOre
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
            Healthy food options were either oily, stale, or overpriced.
            VegOre was built to fix that.
          </p>

          <p className="text-gray-700 leading-relaxed text-center mt-4 text-sm sm:text-base">
            Our chefs prepare meals every morning with 
            <strong> fresh vegetables, premium ingredients, and minimal oil </strong>.
            Every meal is crafted with love and delivered with care.
          </p>
        </div>
      </div>

      {/* SECTION 5: OUR VALUES */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Quality First", desc: "Fresh veggies, pure ingredients, no preservatives." },
            { title: "Nutrition Focused", desc: "Macro-balanced meals approved by experts." },
            { title: "Maximum Convenience", desc: "Flexible subscriptions and door delivery." },
            { title: "Transparency", desc: "Clear ingredients, clear nutrition, honest food." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: TEAM MESSAGE */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-emerald-700 text-white rounded-2xl p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">A Message From Our Team</h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            “We are on a mission to inspire healthier lifestyles.  
            Every meal we serve helps you feel energetic, balanced, and nourished.  
            Thank you for trusting VegOre as your daily meal partner.”
          </p>
        </div>
      </div>
    </div>
  );
}
