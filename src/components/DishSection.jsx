

import DishCard from "./DishCard";
import ViewMoreCard from "./ViewMoreCard";

export default function DishSection({ dishes, category, type }) {
  return (
    <div className="py-6 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}

        <ViewMoreCard category={category} type={type} />
      </div>
    </div>
  );
}
