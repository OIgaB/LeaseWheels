import { NavLink } from 'react-router-dom';
import { useMemo } from "react";
import { useCars } from '../hooks/index';
import scss from '../../styles/index.module.scss';
import { Card } from '../Card';
import { filterCars } from '../Filter/index'; 


const Favorite = () => {
    const { favoriteCars, filterLocation, brand, price, mileageFrom, mileageTo } = useCars();

    const filteredCars = useMemo(() => {
        if(filterLocation === '/favorites') {
            return filterCars(filterLocation, favoriteCars, brand, price, mileageFrom, mileageTo)
        } else {
            return favoriteCars;
        }
    }, [favoriteCars, filterLocation, brand, price, mileageFrom, mileageTo]);


    return (
        <div className={scss.dashbordContainer}>
            <div className={scss.dashbordBlank}></div>
            {filteredCars.length > 0 ? (
                <ul className={scss.dashbordList}>
                    {filteredCars.map((car) => (
                        <Card key={car.id} car={car} />
                    ))}
                </ul>
            ) : (
                <div className={scss.dashbordEmptyContainer}>
                    <div className={scss.dashbordEmptyOverlay}>
                    <div className={scss.dashbordEmptyNavigation}>
                        <h1>
                            <NavLink to="/catalogue">Cataloge</NavLink>
                        </h1>                        
                    </div>
                        <h3 className={scss.dashbordNote}>Discover the handpicked gems from our catalogue – your next adventure awaits!</h3>
                    </div>
                </div>
            )} 
        </div>
    );
}

export default Favorite;
