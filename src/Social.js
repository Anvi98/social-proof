import React from "react";
import Rates from "./Rates";
import TestimonyCard from "./TestimonyCard";
// import bgMBottom from  "./images/bg-pattern-bottom-mobile.svg"
import bgMTop from "./images/bg-pattern-top-mobile.svg"
import bgDTop from "./images/bg-pattern-top-desktop.svg"
// import bgDBottom from  "./images/bg-pattern-bottom-desktop.svg"

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
    <div className="">
      <img src={bgMTop} alt="" className="block absolute md:hidden" />
      <img src={bgDTop} alt="" className="hidden absolute md:block"/>
      <div className="mb-10">
        <span>
          <h1 className="font-bold text-4xl p-10 w-full text-center leading-none text-dark-magenta">10,000+ of our users love our products.</h1>
          <p className="p-5 text-dark-grayish-magenta mb-3">We only provide great products combined with excellent customer service. See what our satisfied
            customers are saying about our services.
          </p>
        </span>

        <span>
          <div className="text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold"> <Rates/> </div>
          <div className="text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold"> <Rates/> </div>
          <div className="text-center m-3 p-2 bg-light-Grayish-Magenta rounded-lg text-dark-magenta font-bold"> <Rates/> </div>
        </span>
      </div>

      <div>
        <div> <TestimonyCard data={data[0]}/></div>
        <div> <TestimonyCard data={data[1]}/></div>
        <div> <TestimonyCard data={data[2]}/></div>
      </div>
    </div>

   );
}
 
export default Social;