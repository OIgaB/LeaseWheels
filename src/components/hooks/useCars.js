import { useSelector } from 'react-redux';
import {
    selectAllCars,
    selectCarsPerPage,
    selectCarById,
    selectisLoading,
    selectError,
    selectFavoriteCars,
    selectBrand,
    selectPrice,
    selectMileageFrom,
    selectMileageTo,
    selectFilterLocation
} from '../../redux/selectors';

export const useCars = () => {
  const allCars = useSelector(selectAllCars);
  const carsForPage = useSelector(selectCarsPerPage);
  const carById = useSelector(selectCarById);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const filterLocation = useSelector(selectFilterLocation);
  const favoriteCars = useSelector(selectFavoriteCars);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  return {
    allCars,
    carsForPage,
    carById,
    isLoading,
    error,
    filterLocation,
    favoriteCars,
    brand,
    price,
    mileageFrom,
    mileageTo
  };
};