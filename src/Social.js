import React from "react";
import Rates from "./Rates";
import TestimonyCard from "./TestimonyCard";


const Social = () => {
  const data = [
    {
      "user":"Colton Smith",
      "msg": "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received in time. Excellent!",
    },
    {
      "user": "Irene Robert",
      "msg": "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      "user": "Anne Wallace",
      "msg": "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone.",
    }
  ];

  return ( 
    <div className=" w-4/5 m-auto">
      <div className="mb-10 block md:flex md:justify-between ">
        <span className="flex-initial w-2/5">
          <h1 className="font-bold text-4xl py-10 w-full text-center leading-none text-dark-magenta md:text-4xl md:text-left">10,000+ of our users love our products.</h1>
          <p className="text-center p-5 text-dark-grayish-magenta mb-3 md:text-left">We only provide great products combined with excellent customer service. See what our satisfied
            customers are saying about our services.
          </p>
        </span>

        <span className="flex-initial p-10 flex-col sm:flex-row">
          <div className="w-full text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold md:w-96 md:flex"> <Rates/> </div>
          <div className="w-full text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold md:w-96 md:flex md:ml-10"> <Rates/> </div>
          <div className="w-full text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold md:w-96 md:flex md:ml-20"> <Rates/> </div>
        </span>
      </div>

      <div className="block m-auto md:flex">
       <div><TestimonyCard data={data[0]}/></div>
       <div className="mt-1 md:mt-5"><TestimonyCard data={data[1]}/></div>
       <div className="mt-1 md:mt-10"><TestimonyCard data={data[2]}/></div>
      </div>
    </div>

   );
}
 
export default Social;