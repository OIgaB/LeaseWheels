export const selectCars = state => state.cars;
export const selectCarById = state => state.cars.itemById;

export const selectFavoriteCars = state => state.favorite.favoriteCars;

export const selectBrand = state => state.filter.brand;
export const selectPrice = state => state.filter.price;
export const selectMileageFrom = state => state.filter.mileageFrom;
export const selectMileageTo = state => state.filter.mileageTo;