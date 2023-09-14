import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";

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


    return (
      <div>
        <ul>
          <li>
            <label htmlFor="brand">Car brand</label>
            <select name="brand" id="brand"> 
              {cars &&
                uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))
              }
            </select>  
          </li>
          <li>
            <label htmlFor="price">Price/ 1 hour</label>
            <select name="price" id="price"> 
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
            // className={scss.OBAddInput}
            // value={} 
            // onChange={e => setTitleValue(e.target.value)} 
          />
          <input 
            type="text" 
            name="mileageTo" 
            placeholder="To"
            // className={scss.OBAddInput}
            // value={} 
            // onChange={e => setTitleValue(e.target.value)}  
          />
        </label>
      </div>
    );
  };
  
  export default Sidebar;