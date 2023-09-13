import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* <Home /> */}
      <h3>Hi there! I am a HomePage!</h3>
      <p>
        <NavLink to="/catalogue">Link to CataloguePage (click me)</NavLink>
      </p>
    </>
  );
};
export default HomePage;