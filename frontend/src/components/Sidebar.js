import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
            <h1 className="heading"><FontAwesomeIcon icon={faBagShopping} />OnShop</h1>
            <ul className="options">
                <li><a href="#"><FontAwesomeIcon className='icons' icon={faHeart} size="1x" />Home</a></li>
                <li><a href="#"><FontAwesomeIcon  className='icons' icon={faRocket} size="1x" />Category</a></li>
                <li><a href="#"><FontAwesomeIcon className='icons' icon={faWallet} size="1x" />Wallet</a></li>
                <li><a href="#"><FontAwesomeIcon className='icons' icon={faCartPlus} size="1x" />Cart</a></li>
                <li><a href="#"><FontAwesomeIcon className='icons' icon={faUser} size="1x" /> UserProfile </a></li>
                <li><a href="#"><FontAwesomeIcon className='icons' icon={faGear} size="1x" />Settings</a></li>
            </ul> 
            <div class="social_media">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
    </>
  )
}

export default Sidebar