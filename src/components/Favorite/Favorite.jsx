import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";

const Favorite = () => {
    const favoriteCars = useSelector(selectFavoriteCars);

    return (
        <div>Hi, I am here</div>
    );
}

export default Favorite;
