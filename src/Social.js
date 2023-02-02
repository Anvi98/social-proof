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
    <div>
      <div>
        <span>
          <h1 className="font-bold">10,000+ of our users love our products.</h1>
          <p>We only provide great products combined with excellent customer service. See what our satisfied
            customers are saying about our services.
          </p>
        </span>

        <span>
          <div> <Rates/> </div>
          <div> <Rates/> </div>
          <div> <Rates/> </div>
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