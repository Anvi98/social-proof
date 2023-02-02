import React from "react";
import star from './images/icon-star.svg';

const Rates = () => {
  return ( 
    <>
      <span className="flex justify-center m-2"> 
        <img src={star} alt="icon-star" />
        <img src={star} alt="icon-star" />
        <img src={star} alt="icon-star" />
        <img src={star} alt="icon-star" />
        <img src={star} alt="icon-star" />
      </span>
      <p>Rated 5 stars in Reviews</p>
    </>
   );
}
 
export default Rates;