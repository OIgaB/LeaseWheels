import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getAllCars, getCarsPerPage } from "../../redux/carsOperations";
import { useCars } from '../hooks/index';
import { getFilterData } from '../../redux/filterSlice';
import scss from '../../styles/index.module.scss';
import SvgSprite from '../../images/sprite.svg';


const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { allCars } = useCars();

  useEffect(() => {
    dispatch(getAllCars()); 
  }, [dispatch]);

  const largestPrice = allCars.reduce((acc, { rentalPrice }) => { // "$500"
    return Number(rentalPrice.slice(1)) > Number(acc) ? rentalPrice.slice(1) : acc; 
  }, 0); 

  const smallestPrice = allCars.reduce((acc, { rentalPrice }) => { // "$25"
    return Number(rentalPrice.slice(1)) > Number(acc) ? acc  : rentalPrice.slice(1); 
  }, largestPrice); 
  

  let prices = []; 
                                 // 30            
  for (let i = Number(Math.ceil(smallestPrice / 10) * 10); i <= Number(largestPrice); i += 10) {
    prices.push(i);
  }

  const uniqueBrands = allCars.flatMap(car => car.make).filter((make, index, array) => array.indexOf(make) === index).sort((a, b) => a.localeCompare(b));

  const [selectedBrand, setSelectedBrand] = useState('');
  const [isOpenBrands, setIsOpenBrands] = useState(false);  
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedPriceUI, setSelectedPriceUI] = useState('');
  const [isOpenPrices, setIsOpenPrices] = useState(false);
  const [mileageValueFromUI, setMileageValueFromUI] = useState('');
  const [mileageValueFrom, setMileageValueFrom] = useState('');
  const [mileageValueToUI, setMileageValueToUI] = useState('');
  const [mileageValueTo, setMileageValueTo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

//-----------------------------Dropdown-------------------------------------
// const handleDropdownClick = (e) => {
//   console.log(e.target)
// }
//-----------------------------Car brand------------------------------------

  const filteredOptions = uniqueBrands.filter((option) =>
    option.toLowerCase().includes(selectedBrand.toLowerCase())
  );

  const handleBrandOptionSelect = (option) => {
    setSelectedBrand(option); 
    setIsOpenBrands(false);
  };
//--------------------------------Price/ 1 hour------------------------------

const handlePriceOptionSelect = (option) => {
  setSelectedPrice(option); 
  setIsOpenPrices(false);
};

useEffect(() => {
    setSelectedPriceUI(`To ${selectedPrice} $`);
}, [selectedPrice]); 

//------------------------------Сar mileage / km-----------------------------

  const hadleMileageValueFromChange = (e) => {
    const value = e.target.value.trim();

    const valueWithNoCommas = value.replaceAll(',','');  // removes commas

    if (isNaN(valueWithNoCommas)) { // if not a digit entered
      setMileageValueFromUI(Number(valueWithNoCommas.slice(0, -1)).toLocaleString('en-US')); // removes not allowed symbol

      setErrorMessage("Only digits are allowed.");

      setTimeout(() => {
        setErrorMessage(''); 
      }, 2000); 

      return;
    }

    setMileageValueFrom(valueWithNoCommas);
    setMileageValueFromUI(Number(valueWithNoCommas).toLocaleString('en-US'));  // adds commas     
  };


  const hadleMileageValueToChange = (e) => {
    const value = e.target.value.trim();
    const valueWithNoCommas = value.replaceAll(',','');

    if (isNaN(valueWithNoCommas)) { 
      setMileageValueToUI(Number(valueWithNoCommas.slice(0, -1)).toLocaleString('en-US')); 
      return;
    }

    setErrorMessage("Only digits are allowed.");

    setTimeout(() => {
      setErrorMessage(''); 
    }, 3000); 

    setMileageValueTo(valueWithNoCommas);
    setMileageValueToUI(Number(valueWithNoCommas).toLocaleString('en-US'));  
  };

//   //------------------------------Submit-------------------------------------

  const handleFormSearch = (e) => {
    e.preventDefault();

    const filterData = {
      filterLocation: location.pathname,
      brand: selectedBrand, 
      price: selectedPrice,  
      mileageFrom: mileageValueFrom, 
      mileageTo: mileageValueTo, 
    };

    dispatch(getFilterData(filterData));
  };

  const handleReset = () => {
    dispatch(getFilterData({}));
    dispatch(getCarsPerPage(1));
    setSelectedBrand('');
    setSelectedPriceUI('');
    setMileageValueFromUI('');
    setMileageValueToUI('');
  }

  const rightArrow = () => {
    return location.pathname !== '/favorites';
  };

    return (
      <div className={scss.sidebarContainer}> 
        <NavLink to="/" className={`${scss.sidebarIcon} ${scss.sidebarIconLeftBtn}`}>
          Home
          <svg width="45" height="45">
            <use href={SvgSprite + '#icon-arrow-left'} />
          </svg>            
        </NavLink>

        <form onSubmit={handleFormSearch} className={scss.sidebarForm}>
           <div className={scss.inputContainer}>
             <label htmlFor="brand" className={scss.label}>Car brand</label>
               <input
                 type="text"
                 name='brand'
                 id='brand'
                 placeholder="Enter the text"
                 value={selectedBrand}
                 onChange={(e) => setSelectedBrand(e.target.value)}
                 className={`${scss.input} ${scss.customBrandInput}`}
               />
               <button
                 type="button"
                 className={scss.iconBtn}
                 aria-label="arrow"
                 onClick={() => setIsOpenBrands(!isOpenBrands)}
               >
                 <svg width="20" height="20">
                   <use href={SvgSprite + '#icon-chevron-down'} />
                 </svg>
               </button>

             {isOpenBrands && (
               <ul className={`${scss.dropdown} ${scss.bransList}`} /*onClick={handleDropdownClick}*/>
                 {filteredOptions.map((option) => (
                   <li key={option} onClick={() => handleBrandOptionSelect(option)} className={`${scss.listItem} ${scss.brandslistItem}`}>
                     {option}
                   </li>
                 ))}
               </ul>
             )}
           </div>
      

           <div className={scss.inputContainer}>
             <label htmlFor="price" className={scss.label}>Price/ 1 hour</label>
             <input
               type="text"
               name='price'
               id='price'
               placeholder="To $"
               value={selectedPriceUI}
               onChange={(e) => setSelectedPrice(e.target.value)}
               className={`${scss.input} ${scss.customPriceInput}`}
             />
              <button
                className={scss.iconBtn}
                aria-label="arrow"
                type="button"
                onClick={() => setIsOpenPrices(!isOpenPrices)}
              >
                <svg width="20" height="20">
                  <use href={SvgSprite + '#icon-chevron-down'} />
                </svg>
              </button>
        
             {isOpenPrices && (
               <ul className={`${scss.dropdown} ${scss.pricesList}`}>
                 {prices.map((option) => (
                   <li key={option} onClick={() => handlePriceOptionSelect(option)} className={`${scss.listItem} ${scss.priceslistItem}`}>
                     {option}
                   </li>
                 ))}
               </ul>
             )}
           </div>

           <div className={scss.inputContainer}>
             <label htmlFor="price" className={scss.label}>Сar mileage / km</label>
             <div className={scss.inputMileageContainer}>
               <input 
                 type="text" 
                 id='mileage'
                 name="mileageFrom" 
                 value={mileageValueFromUI} 
                 onChange={hadleMileageValueFromChange} 
                 className={`${scss.input} ${scss.customMileageInputLeft}`}
               />
               <span className={`${scss.inputStaticText} ${scss.inputStaticText__left}`}>From</span>
               <input 
                 type="text" 
                 id='mileage'
                 name="mileageTo" 
                 value={mileageValueToUI} 
                 onChange={hadleMileageValueToChange} 
                 className={`${scss.input} ${scss.customMileageInputRight}`}
               />             
               <span className={`${scss.inputStaticText} ${scss.inputStaticText__right}`}>To</span>
             </div> 
             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}   
           </div>    
           
        <button type="submit" className={scss.submitBtn}>Search</button>
        </form>
        <button type="button" onClick={handleReset} className={scss.resetBtn}>
            <svg width="40" height="40">
                <use href={SvgSprite + '#icon-reset'} />
            </svg>
        </button>

        {rightArrow() ? (
          <NavLink to="/favorites" onClick={handleReset} className={`${scss.sidebarIcon} ${scss.sidebarIconRightBtn}`}>
            <svg width="45" height="45">
              <use href={SvgSprite + '#icon-arrow-right'} />
            </svg>
            Favorite
          </NavLink>   
        ) : (
          <NavLink to="/catalogue" onClick={handleReset} className={`${scss.sidebarIcon} ${scss.sidebarIconRightBtn}`}>
            <svg width="45" height="45">
              <use href={SvgSprite + '#icon-arrow-left'} />
            </svg>
            Catalogue
          </NavLink>    
        )}    
    </div>
  );
};
  
export default Sidebar;