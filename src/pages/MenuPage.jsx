export default function MenuPage() {
  return (
    <main className="pt-20 px-6 max-w-6xl mx-auto">

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">Veg</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Vegan</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Jain</button>
      </div>

      {/* FOOD SECTIONS */}
      <h2 className="text-2xl font-bold mb-4">Meals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-4">Meal Item 1</div>
        <div className="bg-white shadow rounded-lg p-4">Meal Item 2</div>
        <div className="bg-white shadow rounded-lg p-4">Meal Item 3</div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Salads</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-4">Salad 1</div>
        <div className="bg-white shadow rounded-lg p-4">Salad 2</div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Shakes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-4">Shake 1</div>
        <div className="bg-white shadow rounded-lg p-4">Shake 2</div>
      </div>
    </main>
  );
}
