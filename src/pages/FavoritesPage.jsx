import { NavLink } from 'react-router-dom';

const FavoritesPage = () => {
    return (
      <>
        {/* <FavoritesPage /> */}
        <h3>Hi there! I am a FavoritesPage! сторінка з оголошеннями, які були додані користувачем в улюблені Зовнішній вигляд програми повинен складатися з cайдбару та області перегляду.</h3>
        <p>
          <NavLink to="/catalogue">Link to CatalogePage (click me)</NavLink>
        </p>
        <p>
          <NavLink to="/">Link to HomePage (click me)</NavLink>
        </p>
      </>
    );
  };
  export default FavoritesPage;