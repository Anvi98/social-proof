import React from "react";
import colton from './images/image-colton.jpg'
import irene from './images/image-irene.jpg'
import anne from './images/image-anne.jpg'

const TestimonyCard = (props) => {
  const {user, msg } = props.data;

  return ( 
    <div className="bg-dark-magenta text-white m-4 p-6 rounded-lg">
      <div className="flex">
      <span className="p-3 mb-3">
        {user==="Colton Smith" &&  <img src={colton} alt={user} className="rounded-full w-12 mx-3 ml-2" />}
        {user==="Irene Robert" &&  <img src={irene} alt={user}  className="rounded-full w-12 mx-3 ml-2"/>}
        {user==="Anne Wallace" &&  <img src={anne} alt={user}  className="rounded-full w-12 mx-3 ml-2"/>}
      </span>
      <span className="my-3">
        <p>{user}</p>
        <p className="text-soft-pink">Verified Buyer</p>
      </span>
      </div>
      <p>{msg}</p>
    </div>
   );
}
 
export default TestimonyCard;