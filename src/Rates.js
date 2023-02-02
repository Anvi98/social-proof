import React from "react";
import star from './images/icon-star.svg';

const Rates = () => {
  return ( 
    <>
      <div>
        <span> 
          <img src={star} alt="icon-star" />
          <img src={star} alt="icon-star" />
          <img src={star} alt="icon-star" />
          <img src={star} alt="icon-star" />
          <img src={star} alt="icon-star" />
        </span>
        <p>Rated 5 stars in Reviews</p>
      </div>
    </>
   );
}
 
export default Rates;