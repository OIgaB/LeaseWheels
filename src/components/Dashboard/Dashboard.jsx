import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsPerPage } from "../../redux/carsOperations";
import { useCars } from '../hooks/index';
import { Card } from '../Card';
import { Loader } from "../Loader";
import scss from '../../styles/index.module.scss';


const Dashboard = () => {
    const dispatch = useDispatch();
    const { allCars, carsForPage, isLoading, error, brand, price, mileageFrom, mileageTo } = useCars();

    const [carsPerPage, setCarsPerPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        setCarsPerPage([]);
    }, [allCars]);


    if(currentPage !== 1) {
        setTimeout(() => {
          window.scrollBy({
            top: 510,
            behavior: 'smooth',
        });
        }, 150);
    }
    
    const filteredCars = allCars.filter((car) => {
        if (car.make !== brand) {
          return false;
        }
        if (car.rentalPrice.slice(1) > price) {
          return false;
        }
        if (car.mileage < mileageFrom) {
          return false;
        }
        if (car.mileage > mileageTo) {
            return false;
        }
        return true;
      });
    

    console.log(filteredCars);



    return (          
        <> 
        {(isLoading && !error) && <Loader />}
        <div className={scss.dashbordContainer}>
            <ul className={scss.dashbordList}>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <Card key={car.id} car={car} />                           
                    ))
                ) : (
                    carsPerPage.length > 0 && (
                        carsPerPage.map((car) => (
                            <Card key={car.id} car={car} />                           
                        ))
                    )
                )}
            </ul>
            {(filteredCars.length === 0 && carsPerPage.length > 0 && currentPage !== 4) && 
                <button 
                    type="button" 
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)} 
                    className={scss.loadMoreBtn}
                >
                    Load more
                </button>
            } 
            {filteredCars.length === 0 && currentPage === 4 && <p className={scss.collectionEnd}>You've reached the end of search results.</p>} 
        </div>
        </>   
    );
}

export default Dashboard;