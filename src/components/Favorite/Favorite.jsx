import { NavLink } from 'react-router-dom';
import { useCars } from '../hooks/index';
import scss from '../../styles/index.module.scss';
import { Card } from '../Card';

const Favorite = () => {
    const { favoriteCars} = useCars();

    return (
        <div className={scss.dashbordContainer}>
            <div className={scss.dashbordBlank}></div>
            {favoriteCars.length > 0 ? (
                <ul className={scss.dashbordList}>
                    {favoriteCars.map((car) => (
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
