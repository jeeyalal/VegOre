// // import DishCard from "./DishCard";

// // export default function DishSection({ dishes }) {
// //   return (
// //     <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
// //       {dishes.map((dish) => (
// //         <DishCard key={dish.id} dish={dish} />
// //       ))}
// //     </div>
// //   );
// // }


// import DishCard from "./DishCard";
// import ViewMoreButton from "./ViewMoreButton";

// export default function DishSection({ dishes, category = "normal", type = "meals" }) {
//   return (
//     <div className="mt-6 px-4">

//       {/* Dishes Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {dishes.map((dish) => (
//           <DishCard key={dish.id} dish={dish} />
         
//         ))}
//          <ViewMoreButton category={category} type={type} />
//       </div>

//       {/* View More */}
//       <div className="flex justify-center mt-6">
        
//       </div>
//     </div>
//   );
// }

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
