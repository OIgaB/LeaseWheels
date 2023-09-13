import { NavLink } from 'react-router-dom';

const CatalogPage = () => {
    return (
      <>
        {/* <CatalogPage /> */}
        <h3>Hi there! I am a CataloguePage!</h3>
        <p>
          <NavLink to="/favorites">Link to FavoritesPage (click me)</NavLink>
        </p>
        <p>
          <NavLink to="/">Link to HomePage (click me)</NavLink>
        </p>
      </>
    );
  };
  export default CatalogPage;