import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";
import { DetailedCard } from "../DetailedCard";
import { addToFavorite, removeFromFavorite } from '../../redux/favoriteSlice';
import { selectFavoriteCars } from '../../redux/selectors';
import SvgSprite from '../../images/sprite.svg';
import scss from '../../styles/index.module.scss';

const Card = ({ car }) => {
    const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities } = car;

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const favoriteCars = useSelector(selectFavoriteCars);

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

    const handleButtonClick = (car) => {
        if (!favoriteCars.some(favorcar => favorcar.id === car.id)) {
            dispatch(addToFavorite(car)); 
        } else {
            dispatch(removeFromFavorite(car.id));
        }   
      };

    return ( 
        <li className={scss.listCard}> 
            <div className={scss.pictureContainer}>
                <img className={scss.picture} src={img} alt={make} />    
                <button
                    type="button"
                    className={scss.iconHeartBtn}
                    aria-label="heart"
                    onClick={() => handleButtonClick(car)}    
                >
                {favoriteCars.some(favorcar => favorcar.id === car.id) ? (
                    <svg width="18" height="18" fill="#3470FF" stroke='#3470FF'>
                        <use href={SvgSprite + '#icon-heart'} />
                    </svg>
                ) : (
                    <svg width="18" height="18" fill="transparent" stroke='#fff'>
                        <use href={SvgSprite + '#icon-heart'} />
                    </svg>
                )}

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
                {isModalOpen && (
                    <Modal onClose={handleCloseModal}>
                        <DetailedCard id={id} />
                    </Modal>
                )}                              
        </li>          
    );
}

export default Card;