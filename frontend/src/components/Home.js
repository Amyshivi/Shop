/* eslint-disable no-undef */
import React, { useEffect ,useState ,useContext} from 'react'
import '../components/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import jeans from '../assets/jeans.png'
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import UsernameContext from './UsernameContext';

// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { username, setUsername } = useContext(UsernameContext);



  useEffect(()=>{
    axios.get('http://localhost:3000/products').then((res)=>{
      console.log("response",res);
      setProduct(res.data);
  
    
    })
  },[])

  useEffect(() => {
    // Filter data based on searchQuery
    const filteredResults = product.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [product, searchQuery]);
  
  return (
   <>
  <div class="wrapper">
          <Sidebar/>
        <div class="main_content">
          
        <div id="search-wrapper">

{/* <i class="search-icon fas fa-search"></i> */}

<input type="text" id="search" placeholder="      Search Product" 
 value={searchQuery}
 onChange={e => setSearchQuery(e.target.value)}
/>
<button id="search-button" >Search</button>


</div>

<div className='navIcon'>
<FontAwesomeIcon className='navcon' icon={faWallet} size="2x" />
<FontAwesomeIcon className='navcon' icon={faMessage} size="2x" />
<FontAwesomeIcon className='navcon' icon={faBell} size="2x" />

    <div className='userIcon'>
          <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="image" />
    </div>
    <div>
      {username}
    </div>


</div>
          <h1 className='shopHeading'>Jeans</h1>  
          <div className='badge'>
                <h6>New</h6>
          </div>
         



          <div id="product-grid">
{


filteredData.map((product) =>(

 <div class="product-card">
    <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
      <img src={jeans} alt="Product 1" />
        <h5>{product.name}</h5>
        <div className='stars'>
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
        </div>
        
    <Link to={`/myaccount/${product._id}`}> <button class="buy-button"  >Buy Now</button></Link> 

<div className='price'>
      <h5>$ {product.price} </h5>
</div >

    </div> 
   
   
))
}



     
     
    
      
     
    </div>


    
 

    </div>
    </div>

   </>
  )
}

export default Home




// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>
// <div class="product-card">
// <FontAwesomeIcon className='cartIcon' icon={faCartPlus} size="2x" />
//   <img src={jeans} alt="Product 1" />
//     <h5>Jeans pant</h5>
//     <div className='stars'>
//     <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>
//     </div>
    
//   <button class="buy-button">Buy Now</button>

// <div className='price'>
//   <h5>$20.6</h5>
// </div>

// </div>