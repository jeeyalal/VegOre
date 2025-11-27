export function getFilteredDishes(category, type) {
  return category[type] || [];
}
