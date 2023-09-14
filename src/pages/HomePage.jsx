import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* <Home /> */}
      <h3>Hi there! I am a HomePage! домашня сторінка з загальним описом послуг, що надає компанія. Стилізація та оформлення на ваш розсуд.</h3>
      <p>
        <NavLink to="/catalogue">Link to CataloguePage (click me)</NavLink>
      </p>
    </>
  );
};
export default HomePage;