export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen pt-6 pb-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-4 text-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700">
          About <span className="text-emerald-600">VegOre</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Fresh. Clean. Wholesome.  
          We deliver meals that nourish your body and fit your lifestyle.
        </p>
      </div>

      {/* SECTION 1: OUR STORY */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=900"
          alt="VegOre Story"
          className="w-full rounded-2xl shadow-xl object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>

          <p className="text-gray-700 leading-relaxed">
            VegOre began with a simple idea —  
            <span className="font-semibold text-green-700">healthy food should be easy, accessible and enjoyable</span>.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We noticed people skipping meals, relying on junk food, or eating 
            unhealthy takeout due to busy schedules. That’s when we decided to 
            create a solution — freshly prepared <strong>Veg, Vegan & Jain meals</strong> 
            delivered daily, designed to nourish both mind and body.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Today, VegOre stands as a trusted meal partner for students, 
            working professionals, fitness lovers, and health-conscious families.
          </p>
        </div>
      </div>

      {/* SECTION 2: OUR MISSION */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to make clean eating simple for everyone. 
            We focus on:
          </p>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>🌱 Providing 100% fresh, preservative-free meals</li>
            <li>🍽️ Offering Veg, Vegan & Jain dietary options</li>
            <li>💪 Supporting fitness & weight-loss goals</li>
            <li>🚚 Ensuring timely delivery every single day</li>
            <li>❤️ Bringing taste, nutrition & convenience together</li>
          </ul>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We want to build a world where healthy eating is not a luxury —  
            it’s a lifestyle that anyone can follow effortlessly.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900"
          alt="Mission"
          className="w-full rounded-2xl shadow-xl object-cover"
        />
      </div>

      {/* SECTION 3: WHY WE STARTED */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Why We Started VegOre
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
            We saw a massive gap in the food industry —  
            <strong>people wanted healthy options, but everything available was oily, stale, or expensive.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed text-center mt-4 text-sm sm:text-base">
            VegOre was born to solve this problem.  
            Our chefs prepare meals every morning using the  
            <strong>freshest vegetables, premium ingredients, and minimal oil.</strong>  
            Everything is crafted with love and delivered with care.
          </p>
        </div>
      </div>

      {/* SECTION 4: OUR GOALS */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Our Goals
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Health First", desc: "Deliver meals that improve daily wellness." },
            { title: "Trusted Quality", desc: "Every dish is fresh, safe, and FSSAI certified." },
            { title: "Convenience", desc: "Healthy food delivered right to your doorstep." },
            { title: "Affordable Eating", desc: "Premium quality meals at economical prices." }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: TEAM MESSAGE */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-emerald-700 text-white rounded-2xl p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">A Message From Our Team</h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            “We are on a mission to inspire healthier lifestyles.  
            Every meal we serve is designed to help you feel energetic, 
            balanced, and nourished.  
            Thank you for trusting VegOre as your daily meal partner.”  
          </p>
        </div>
      </div>
    </div>
  );
}
