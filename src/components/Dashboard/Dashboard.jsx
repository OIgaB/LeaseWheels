import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { getAllCars } from "redux/carsOperations";
import { Card } from '../Card';
import { Loader } from "../Loader";
import scss from '../../styles/index.module.scss';



const Dashboard = () => {
    const [allCars, setAllCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const { items: cars, isLoading, error } = useSelector(selectCars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars(currentPage)); // fetch for the next 8 cars

    }, [currentPage, dispatch]);

    useEffect(() => {
        if (cars.length > 0) {
            setAllCars((prevCars) => {
                const uniqueNewCars = cars.filter((car) => {
                    return !prevCars.some((prevCar) => prevCar.id === car.id);
                });
                return [...prevCars, ...uniqueNewCars];
            });
        }
    }, [cars]);

    if(currentPage !== 1) {
        setTimeout(() => {
          window.scrollBy({
            top: 510,
            behavior: 'smooth',
        });
        }, 150);
    }

    return (          
        <> 
        {isLoading && <Loader />}
        {error && <p>Sorry, data has not loaded.</p>}
        <div className={scss.dashbordContainer}>
            <ul className={scss.dashbordList}>
                {allCars.length > 0 && (
                    allCars.map((car) => (
                        <Card key={car.id} car={car} />                           
                    ))
                )}
            </ul>

            {(allCars.length !== 0 && currentPage !== 4) && 
                <button 
                    type="button" 
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)} 
                    className={scss.loadMoreBtn}
                >
                    Load more
                </button>
            }
            {currentPage === 4 && <p className={scss.collectionEnd}>You've reached the end of search results.</p>} 
        </div>
        </>   
    );
}

export default Dashboard;