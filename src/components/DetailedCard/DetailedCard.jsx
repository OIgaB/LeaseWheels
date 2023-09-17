import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCarById } from "../../redux/selectors";
import { getCarByID } from "redux/carsOperations";
import scss from '../../styles/index.module.scss';


const DetailedCard = ({ id }) => {
    console.log(id)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getCarByID(id)); // fetch for the next 8 cars
    // }, [id, dispatch]);

    // const { itemById, isLoading, error } = useSelector(selectCarById);

    // console.log(itemById)
    // console.log(isLoading)
    // console.log(error)

    return ( 
        <div className={scss.detailedCardContainer}>
            {/* <div className={scss.pictureContainer}>
            <img className={scss.picture} src={img} alt={make} />                                  */}
        </div>

        // </div>
    );
}

export default DetailedCard;