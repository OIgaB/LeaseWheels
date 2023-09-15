import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";
import scss from '../../styles/index.module.scss';
import SvgSprite from '../../images/sprite.svg';


const Sidebar = () => {
  const { items: cars, /*isLoading, error*/ } = useSelector(getCars); // items - масив об'єктів зі стору
  // console.log('cars in App from redux:', cars);
  // {error && <h2>{error}</h2>}
  // {isLoading && <Loader />}  

  const largestPrice = cars.reduce((acc, { rentalPrice }) => { // "$500"
    return Number(rentalPrice.slice(1)) > Number(acc) ? rentalPrice.slice(1) : acc; 
  }, 0); 

  const smallestPrice = cars.reduce((acc, { rentalPrice }) => { // "$25"
    return Number(rentalPrice.slice(1)) > Number(acc) ? acc  : rentalPrice.slice(1); 
  }, largestPrice); 
  

  let prices = []; 
                                 // 30            
  for (let i = Number(Math.ceil(smallestPrice / 10) * 10); i <= Number(largestPrice); i += 10) {
    prices.push(i);
  }

  const uniqueBrands = cars.flatMap(car => car.make).filter((make, index, array) => array.indexOf(make) === index).sort((a, b) => a.localeCompare(b));

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
      }, 3000); 

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

  //------------------------------Submit-------------------------------------

  const handleFormSearch = (e) => {
    e.preventDefault();
    console.log('click');
    console.log('selectedBrand:', selectedBrand);
    console.log('selectedPrice:', selectedPrice);
    console.log('selectedPriceUI:', selectedPriceUI);
    console.log('mileageValueFromUI:', mileageValueFromUI);
    console.log('mileageValueFrom:', mileageValueFrom);
    console.log('mileageValueToUI:', mileageValueToUI);
    console.log('mileageValueTo:', mileageValueTo);

    e.target.reset();
  };


    return (
      <div className={scss.sidebarContainer}>
        <form onSubmit={handleFormSearch}>
          <div className={scss.inputContainer}>
            <label htmlFor="brand">Car brand</label>
            <input
              type="text"
              name='brand'
              id='brand'
              placeholder="Enter the text"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className={scss.input}
            />
            <button
              type="button"
              // className={scss.OBCardBtnIcon}
              aria-label="arrow"
              onClick={() => setIsOpenBrands(!isOpenBrands)}
            >
              <svg width="20" height="20">
                <use href={SvgSprite + '#icon-chevron-down'} />
              </svg>
            </button>
          </div>
          {isOpenBrands && (
            <ul>
              {filteredOptions.map((option) => (
                <li key={option} onClick={() => handleBrandOptionSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}


        <div className={scss.inputContainer}>
          <label htmlFor="price">Price/ 1 hour</label>
          <input
            type="text"
            name='price'
            id='price'
            placeholder="To $"
            value={selectedPriceUI}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className={scss.input}
          />
            <button
              type="button"
              // className={scss.OBCardBtnIcon}
              aria-label="arrow"
              onClick={() => setIsOpenPrices(!isOpenPrices)}
            >
              <svg width="20" height="20">
                <use href={SvgSprite + '#icon-chevron-down'} />
              </svg>
            </button>
          </div>
          {isOpenPrices && (
            <ul>
              {prices.map((option) => (
                <li key={option} onClick={() => handlePriceOptionSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}


        <div className={scss.inputContainer}>
          <label htmlFor="price">Сar mileage / km</label>
          <input 
            type="text" 
            id='mileage'
            name="mileageFrom" 
            placeholder="From"
            value={mileageValueFromUI} 
            onChange={hadleMileageValueFromChange} 
            // className={scss.OBAddInput}
          />
          <input 
            type="text" 
            id='mileage'
            name="mileageTo" 
            placeholder="To"
            value={mileageValueToUI} 
            onChange={hadleMileageValueToChange} 
            // className={scss.OBAddInput}
          /> 
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}   
        </div>    
           
        <button type="submit" /*className={scss.OBAddSubmitBtn}*/>Search</button>
        </form>
    </div>
  );
};
  
  export default Sidebar;