
import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";
import scss from '../../styles/index.module.scss';

const Dashboard = () => {
    const { items: cars, /*isLoading, error*/ } = useSelector(getCars); // items - масив об'єктів зі стору
    console.log('cars in App from redux:', cars);
    return (
        <div>
            <ul>
                {cars && (
                    cars.map((car) => (
                        <li key={car.id} className={scss.listItem}>
                            <img 
                                className={scss.picture} 
                                src={car.img}
                                alt={car.make}
                            />  

                        </li>
                    ))
                )}

            </ul>
        </div>
    );
}

export default Dashboard;
