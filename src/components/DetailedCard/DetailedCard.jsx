import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCarById } from "../../redux/selectors";
import { getCarByID } from "../../redux/carsOperations";
import scss from '../../styles/index.module.scss';


const DetailedCard = ({ id }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarByID(id)); 
    }, [id, dispatch]);

    const {id: carId, img, make, model, year, rentalPrice, address, type, accessories, functionalities, fuelConsumption, engineSize, description, rentalConditions, mileage } = useSelector(selectCarById);
    

    const addressArray = address ? address.split(',') : [];
    addressArray.shift();        
    
    const rentalConditionsArray = rentalConditions ? rentalConditions.split('\n') : [];
    
    const formateedMileage = mileage ? Number(mileage).toLocaleString('en-US') : '';

    return ( 
        <div className={scss.cardDetailsContainer}>
            <div className={scss.cardPictureContainer}>
                <img 
                    className={scss.cardPicture} 
                    src={img}
                    alt={make}
                />                                 
            </div>
            <div className={scss.cardMetaWrapper}>
                <p className={scss.cardName}>{make} <span style={{color: '#3470FF'}}>{model}</span>, {year}</p>                              
                {address && carId && year && type &&
                    <ul>
                        {addressArray.map((part, index) => (
                            <li key={index} className={scss.cardDescr}>{part}</li>
                        ))}
                        <li className={scss.cardDescr}>{`Id: ${carId}`}</li>
                        <li className={scss.cardDescr}>{`Year: ${year}`}</li>
                        <li className={`${scss.cardDescr} ${scss.cardCarType}`}>{`Type: ${type.toLowerCase()}`}</li>
                    </ul>
                }
                {fuelConsumption && engineSize &&
                    <div>
                        <span className={scss.cardDescr}>{`Fuel Consumption: ${fuelConsumption}`}</span>
                        <span className={scss.cardDescr}>{`Engine Size: ${engineSize}`}</span>
                    </div>
                }
                <p className={scss.cardPromo}>{description}</p>
                <p className={scss.cardAccesFunc}>Accessories and functionalities:</p>
                {accessories && functionalities && 
                    <div style={{ marginBottom: '24px' }}> 
                        <ul>
                            {accessories.map(item => (
                                <li key={item} className={scss.cardDescr}>{item}</li>
                            ))}
                        </ul> 
                        <ul>
                            {functionalities.map(item => (
                                <li key={item} className={scss.cardDescr}>{item}</li>
                            ))}
                        </ul>             
                    </div>
                }
                <p className={scss.cardAccesFunc}>Rental Conditions:</p>
                {formateedMileage && rentalPrice &&
                <ul className={scss.cardConditionsContainer}>
                    {rentalConditionsArray.map((part, index) => (
                        <li key={index} className={scss.cardConditions}>
                            {part.startsWith("Minimum age") ? (
                                <>
                                    {"Minimum age: "}
                                    <span className={scss.cardConditionsAccent}>{part.split(":")[1]}</span>
                                </>
                            ) : (
                                part
                            )}
                        </li>
                    ))}
                    <li className={scss.cardConditions}>Mileage: <span className={scss.cardConditionsAccent}>{formateedMileage}</span></li>
                    <li className={scss.cardConditions}>Price: <span className={scss.cardConditionsAccent}>{rentalPrice}</span></li>
                </ul>
                }
            </div>
            <button 
                type="button" 
                className={scss.rentalCarBtn}
            >
                <a href="tel:+380730000000">Rental car</a>
            </button>
        </div> 
    );
}

export default DetailedCard;