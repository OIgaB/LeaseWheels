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
    selectMileageTo
} from '../../redux/selectors';

export const useCars = () => {
  const allCars = useSelector(selectAllCars);
  const carsForPage = useSelector(selectCarsPerPage);
  const carById = useSelector(selectCarById);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
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
    favoriteCars,
    brand,
    price,
    mileageFrom,
    mileageTo
  };
};