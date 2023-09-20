import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsPerPage } from "../../redux/carsOperations";
import { useCars } from '../hooks/index';
import { Card } from '../Card';
import { Loader } from "../Loader";
import scss from '../../styles/index.module.scss';
import { string } from "i/lib/util";


const Dashboard = () => {
    const dispatch = useDispatch();
    const { allCars, carsForPage, isLoading, error, brand, price, mileageFrom, mileageTo } = useCars();

    const [carsPerPage, setCarsPerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [notificationVisible, setNotificationVisible] = useState(false);

    useEffect(() => {
        dispatch(getCarsPerPage(currentPage)); // fetch 8 cars
    }, [currentPage, dispatch]);

    useEffect(() => {
        if (carsForPage.length > 0) {
            setCarsPerPage((prevCars) => {
                const mergedCars = [...prevCars];
    
                for (const newCar of carsForPage) {
                    const existingCarIndex = mergedCars.findIndex((car) => car.id === newCar.id); // ensures no duplication of data
    
                    if (existingCarIndex === -1) {
                        mergedCars.push(newCar);
                    }
                }
                return mergedCars;
            });
        }
    }, [carsForPage]);

    if(currentPage !== 1) {
        setTimeout(() => {
          window.scrollBy({
            top: 510,
            behavior: 'smooth',
        });
        }, 150);
    }
    
    let filteredCars = [];

    if(brand !== '' || price !== '' || mileageFrom !== '' || mileageTo !== '') {
        filteredCars = allCars.filter((car) => {
            if (brand && car.make !== brand) { // && - if not empty/undefined
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
        filteredCars = [];
    }

    useEffect(() => {
        if (brand !== '' || price !== '' || mileageFrom !== '' || mileageTo !== '') {
            setCarsPerPage([]);
        } 
    }, [allCars, brand, price, mileageFrom, mileageTo]);

    return (          
        <> 
        {(isLoading && !error) && <Loader />}
        <div className={scss.dashbordContainer}>
            {filteredCars.length > 0 ? (
                <ul className={scss.dashbordList}>
                    {filteredCars.map((car) => (
                    <Card key={car.id} car={car} />
                    ))}
                </ul>
                ) : (
                //     notificationVisible ? (
                //         <p className={scss.noData}>No matches found.</p>
                // ) : (
                    carsPerPage.length > 0 && (
                        <ul className={scss.dashbordList}>
                            {carsPerPage.map((car) => (
                                <Card key={car.id} car={car} />
                            ))}
                        </ul>
                    )
                // )
            )}    
            {(filteredCars.length === 0 && carsPerPage.length > 0 && currentPage !== 4 /*&& !notificationVisible*/) && 
                <button 
                    type="button" 
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)} 
                    className={scss.loadMoreBtn}
                >
                Load more
                </button>
            } 
            {filteredCars.length === 0 && currentPage === 4 && <p className={scss.noData}>You've reached the end of search results.</p>} 
        </div>
        </>   
    );
}

export default Dashboard;