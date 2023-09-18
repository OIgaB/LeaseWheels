import { NavLink } from 'react-router-dom';
import { Favorite } from 'components/Favorite';

const FavoritesPage = () => {
    return (
      <>
        <Favorite />
        <p>
          <NavLink to="/catalogue">CatalogePage (click me)</NavLink>
        </p>
      </>
    );
  };
  export default FavoritesPage;