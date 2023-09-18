import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal";
import { DetailedCard } from "../DetailedCard";
import { addToFavorite } from '../../redux/favoriteSlice'
import SvgSprite from '../../images/sprite.svg';
import scss from '../../styles/index.module.scss';

const Card = ({ car: {id, img, make, model, year, rentalPrice, address, rentalCompany, type,  functionalities} }) => {
    const dispatch = useDispatch();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return ( 
        <div >
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
                        onClick={() => dispatch(addToFavorite(id))}
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
                {isModalOpen && (
                    <Modal onClose={handleCloseModal}>
                        <DetailedCard id={id} />
                    </Modal>
                )}                              
            </li>         
        </div>
    );
}

export default Card;