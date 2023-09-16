import { NavLink } from 'react-router-dom';
import { Dashboard } from 'components/Dashboard';

const CatalogPage = () => {
    return (
      <>
        <Dashboard />
        <h3>Hi there! I am a CataloguePage! сторінка, що містить каталог автівок різної комплектації, які користувач може фільтрувати за маркою, ціною за годину оренди авто та кількістю кілометрів, яку подолав автомобіль під час його експлуатації (пробіг).</h3>
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