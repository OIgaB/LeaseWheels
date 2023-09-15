import { useState } from 'react';
import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";
import scss from '../../styles/index.module.scss';

const Sidebar = () => {
  const { items: cars, isLoading, error } = useSelector(getCars); // items - масив об'єктів зі стору
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
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageValueFromUI, setMileageValueFromUI] = useState('');
  const [mileageValueFrom, setMileageValueFrom] = useState('');
  const [mileageValueToUI, setMileageValueToUI] = useState('');
  const [mileageValueTo, setMileageValueTo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

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
  

  const handleSearch = () => {
    console.log('click');
    console.log('selectedBrand:', selectedBrand);
    console.log('selectedPrice:', selectedPrice);
    console.log('mileageValueFromUI:', mileageValueFromUI);
    console.log('mileageValueFrom:', mileageValueFrom);
    console.log('mileageValueToUI:', mileageValueToUI);
    console.log('mileageValueTo:', mileageValueTo);

    setMileageValueFromUI('');
    setMileageValueToUI('');
  };
  

    return (
      <div>
        <ul>
          <li>
            <label htmlFor="brand">Car brand</label>
            <select name="brand" id="brand" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}> 
              <option value="">Enter the text</option>
              {uniqueBrands &&
                uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))
              }
            </select>  
          </li>
          <li>
            <label htmlFor="price">Price/ 1 hour</label>
            <select name="price" id="price" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}> 
              {prices.map(price => (
                <option key={price} value={price}>{price}</option>
              ))}      
            </select>  
          </li>
        </ul>
        <label> 
          Сar mileage / km
            <input 
              type="text" 
              name="mileageFrom" 
              placeholder="From"
              value={mileageValueFromUI} 
              onChange={hadleMileageValueFromChange} 
              // className={scss.OBAddInput}
            />
            <input 
              type="text" 
              name="mileageTo" 
              placeholder="To"
              value={mileageValueToUI} 
              onChange={hadleMileageValueToChange} 
              // className={scss.OBAddInput}
            />       
        </label>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}     
        <button type="button" onClick={handleSearch} /*className={scss.OBAddSubmitBtn}*/>Search</button>
      </div>
    );
  };
  
  export default Sidebar;