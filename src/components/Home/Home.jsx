import scss from '../../styles/index.module.scss';

const Home = () => {

    return (
    <div className={scss.homeContainer}>
        <div className={scss.homeOverlay}></div>
            <div className={scss.homecontent}>
                <h1 className={scss.homeTitle}>Welcome to Our Car Rental App</h1>
                <p className={scss.homeCall}>Explore a wide range of cars for your next adventure.</p>
                <a href="/LeaseWheels/catalogue" className={scss.homebtn}>Get Started</a>
            </div>
        <div className={scss.homeAdvantages}>
            <ul>
                <li className={scss.homeAdvantageItem}>
                    <span className={scss.homeAdvantageIcon}></span>
                    <p className={scss.homeAdvantageText}>Wide selection of cars</p>
                </li>
                <li className={scss.homeAdvantageItem}>
                    <span className={scss.homeAdvantageIcon}></span>
                    <p className={scss.homeAdvantageText}>From budget-friendly cars to premium and luxury vehicles.</p>
                </li>
                <li className={scss.homeAdvantageItem}>
                    <span className={scss.homeAdvantageIcon}></span>
                    <p className={scss.homeAdvantageText}>Tailor your journey with customizable mileage options.</p>                </li>
                <li className={scss.homeAdvantageItem}>
                    <span className={scss.homeAdvantageIcon}></span>
                    <p className={scss.homeAdvantageText}>Available across Ukraine.</p>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Home;