const filterCars = (filterLocation, cars, brand, price, mileageFrom, mileageTo) => {
    if (brand !== '' || price !== '' || mileageFrom !== '' || mileageTo !== '') {
      return cars.filter((car) => {
        if (brand && car.make !== brand) {
          return false;
        }
        if (price && car.rentalPrice.slice(1) > price) {
          return false;
        }
        if (mileageFrom && car.mileage < mileageFrom) {
          return false;
        }
        if (mileageTo && car.mileage > mileageTo) {
          return false;
        }
        return true;
      });
    } else {
        return filterLocation === '/catalogue' ? [] : cars;
    }
};

export default filterCars;