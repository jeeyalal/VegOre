export default function CategoryTabs({ selected, setSelected }) {
  const tabs = ["normal", "vegan", "jain"];

  return (
    <div className="flex gap-3 justify-center mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold
              ${selected === tab ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}
            `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}
