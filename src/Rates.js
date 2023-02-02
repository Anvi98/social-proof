import React from "react";
import star from './images/icon-star.svg';

const Rates = () => {
  return ( 
    <>
      <span className="flex justify-center m-2"> 
        <img src={star} alt="icon-star" className="w-3 h-3" />
        <img src={star} alt="icon-star" className="w-3 h-3"/>
        <img src={star} alt="icon-star" className="w-3 h-3"/>
        <img src={star} alt="icon-star" className="w-3 h-3"/>
        <img src={star} alt="icon-star" className="w-3 h-3"/>
      </span>
      <p className="md:mt-1">Rated 5 stars in Reviews</p>
    </>
   );
}
 
export default Rates;