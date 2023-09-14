import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../redux/selectors";
import { getAllCars } from "../redux/carsOperations";
import { Loader } from '../components/Loader';
import { SharedLayout } from '../components/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CataloguePage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));


export const App = () => {
  // const { items: cars, isLoading, error } = useSelector(getCars); // items - масив об'єктів зі стору
  // console.log('cars in App from redux:', cars);
  // {error && <h2>{error}</h2>}
  // {isLoading && <Loader />}  

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllCars()) 
  }, [dispatch]); 

  return (
    <div>
      <>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />             
                <Route path='/home' exact element={<HomePage />} redirectTo="/catalogue" />

                <Route path="" element={<SharedLayout />}>  
                    <Route path="/catalogue" /*index*/ element={ <CataloguePage />} redirectTo="/favorites" />   
                    <Route path='/favorites' element={ <FavoritesPage /> } redirectTo="/catalogue" />  
                </Route>

                <Route path='*' exact={true} element={<NotFoundPage />} />  
            </Routes>
        </Suspense>

    </>
    </div>
  );
};
