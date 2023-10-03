import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getCarsPerPage } from "../../redux/carsOperations";
import { useCars } from '../hooks/index';
import { Card } from '../Card';
import { Loader } from "../Loader";
import { filterCars } from '../Filter/index'; 
import scss from '../../styles/index.module.scss';


const Dashboard = () => {
    const dispatch = useDispatch();
    const { allCars, carsForPage, isLoading, error, filterLocation, brand, price, mileageFrom, mileageTo } = useCars();
    
    const [carsPerPage, setCarsPerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [notificationVisible, setNotificationVisible] = useState(false);

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
    
    let filteredCars = useMemo(() => {
        if(filterLocation === '/catalogue') {
            return filterCars(filterLocation, allCars, brand, price, mileageFrom, mileageTo);
        } else {
            return [];
        }
    }, [allCars, filterLocation, brand, price, mileageFrom, mileageTo]);
    

    if (brand === undefined && price === undefined && mileageFrom === undefined && mileageTo === undefined) {
        filteredCars = [];
    }  

    useEffect(() => {
        if ((brand !== '' || price !== '' || mileageFrom !== '' || mileageTo !== '') && filteredCars.length === 0) {
          setNotificationVisible(true);
          if ((brand === undefined && price === undefined && mileageFrom === undefined && mileageTo === undefined) && filteredCars.length === 0) {
            setNotificationVisible(false);
          }
        }
    }, [brand, price, mileageFrom, mileageTo, filteredCars]);

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
                    notificationVisible ? (
                        <p className={scss.noData}>No matches found.</p>
                    ) : (
                        carsPerPage.length > 0 && (
                            <ul className={scss.dashbordList}>
                                {carsPerPage.map((car) => (
                                    <Card key={car.id} car={car} />
                                ))}
                            </ul>
                        )
                    )
                )
            }    
            {(filteredCars.length === 0 && carsPerPage.length > 0 && currentPage !== 4 && !notificationVisible) && 
                <button 
                    type="button" 
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)} 
                    className={scss.loadMoreBtn}
                >
                    Load more
                </button>
            } 
            {filteredCars.length === 0 && currentPage === 4 && 
                <p className={scss.noData}>You've reached the end of search results.</p>
            } 
        </div>
        </>   
    );
}

export default Dashboard;