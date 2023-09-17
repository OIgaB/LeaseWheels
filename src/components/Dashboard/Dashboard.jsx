import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";
import { getAllCars } from "redux/carsOperations";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import { DetailedCard } from "../DetailedCard";
import scss from '../../styles/index.module.scss';
import SvgSprite from '../../images/sprite.svg';


const Dashboard = () => {
    const [allCars, setAllCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { items: cars, isLoading, error } = useSelector(getCars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars(currentPage)); // fetch for the next 8 cars

    }, [currentPage, dispatch]);

    useEffect(() => {
        if (cars.length > 0) {
            setAllCars((prevCars) => {
                const uniqueNewCars = cars.filter((car) => {
                    return !prevCars.some((prevCar) => prevCar.id === car.id);
                });
                return [...prevCars, ...uniqueNewCars];
            });
        }
    }, [cars]);


    const handleAddress = (address) => {
        const parts = address.split(',').map(part => part.trim());
        const [city, country] = parts.slice(-2);
        return `${city} | ${country} |`;
    };

    const handleModel = (make, model) => {
        return (make.length + model.length > 17) ? `${model.slice(0, 5)}...` : `${model}`; 
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if(currentPage !== 1) {
        setTimeout(() => {
          window.scrollBy({
            top: 510,
            behavior: 'smooth',
        });
        }, 150);
    }

    return (          
        <>   
        {isLoading && <Loader />}
        {error && <p>Sorry, data has not loaded.</p>}
        <div className={scss.dashbordContainer}>
            <ul className={scss.dashbordList}>
                {allCars.length > 0 && (
                    allCars.map(({ id, img, make, model, year, rentalPrice, address, rentalCompany, type,  functionalities}) => (
                        <li key={id} className={scss.listCard}>
                            <div className={scss.pictureContainer}>
                                <img 
                                    className={scss.picture} 
                                    src={img}
                                    alt={make}
                                />    
                                <button
                                    type="button"
                                    className={scss.iconHeartBtn}
                                    aria-label="heart"
                                    // onClick={dispatch( (id))}
                                    >
                                    <svg width="18" height="18">
                                        <use href={SvgSprite + '#icon-heart'} />
                                    </svg>
                                </button>                              
                            </div>
                            <div className={scss.cardHeaderPrice}>
                                <p>{make} <span style={{color: '#3470FF'}}>{handleModel(make, model)}</span>, {year}</p>
                                <p>{rentalPrice}</p>                                
                            </div>
                            <div className={scss.cardDesc}>
                                <p>{`${handleAddress(address)} ${rentalCompany} | ${rentalPrice.slice(1) > 50 ? 'Premium |' : 'Economy |'}`}<span style={{ textTransform: 'capitalize' }}>{` ${type.toLowerCase()} |`}</span>{` ${model} | ${id} | ${functionalities[0]}`}</p>
                            </div>
                            <button 
                                type="button" 
                                onClick={handleOpenModal}
                                className={scss.learnMoreBtn}
                            >
                                Learn more
                            </button>
                        </li>
                    ))
                )}
            </ul>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <DetailedCard />
                        {/* // onClose={handleCloseAddCardModal}
                        // idColumn={activeColumnId}
                        // operation={addTasks} */}
                </Modal>
            )}
            {(allCars.length !== 0 && currentPage !== 4) && 
                <button 
                    type="button" 
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)} 
                    className={scss.loadMoreBtn}
                >
                    Load more
                </button>
            }
            {currentPage === 4 && <p className={scss.collectionEnd}>You've reached the end of search results.</p>} 
        </div>
        </>   
    );
}

export default Dashboard;