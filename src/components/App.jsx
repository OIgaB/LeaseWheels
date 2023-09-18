import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { SharedLayout } from '../components/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CataloguePage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));


export const App = () => { 

  return (
    <div>
      <>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />             
                <Route path='/home' exact element={<HomePage />} redirectTo="/catalogue" />

                <Route path="" element={<SharedLayout />}>  
                    <Route path="/catalogue" element={ <CataloguePage />} redirectTo="/favorites" />   
                    <Route path="/favorites" element={ <FavoritesPage /> } redirectTo="/catalogue" />  
                </Route>

                <Route path="*" exact={true} element={<NotFoundPage />} />  
            </Routes>
        </Suspense>

    </>
    </div>
  );
};
