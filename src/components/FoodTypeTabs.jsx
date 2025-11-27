export default function FoodTypeTabs({ foodType, setFoodType }) {
  const types = [
    { key: "meals", label: "Meals 🍱" },
    { key: "salads", label: "Salads 🥙" },
    { key: "smoothies", label: "Smoothies 🥤" },
  ];

  return (
    <div className="flex gap-3 justify-center mt-4">
      {types.map((type) => (
        <button
          key={type.key}
          onClick={() => setFoodType(type.key)}
          className={`px-4 py-1.5 rounded-full font-medium
            ${foodType === type.key ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}
          `}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
