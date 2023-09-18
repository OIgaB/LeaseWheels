import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import scss from '../../styles/index.module.scss';
import { Card } from '../Card';

const Favorite = () => {
    const favoriteCars = useSelector(selectFavoriteCars);

    return (
        <div className={scss.dashbordContainer}>
            <ul className={scss.dashbordList}>
                {favoriteCars.length > 0 && (
                    favoriteCars.map((car) => (
                        <Card key={car.id} car={car} />                           
                    ))
                )}
            </ul>
        </div>
    );
}

export default Favorite;
