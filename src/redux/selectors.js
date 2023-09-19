export const selectAllCars = state => state.cars.allItems;
export const selectCarsPerPage = state => state.cars.itemsPerPage; 
export const selectCarById = state => state.cars.itemById;
export const selectisLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFavoriteCars = state => state.favorite.favoriteCars;

export const selectBrand = state => state.filter.brand;
export const selectPrice = state => state.filter.price;
export const selectMileageFrom = state => state.filter.mileageFrom;
export const selectMileageTo = state => state.filter.mileageTo;