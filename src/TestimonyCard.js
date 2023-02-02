import React from "react";
import colton from './images/image-colton.jpg'
import irene from './images/image-irene.jpg'
import anne from './images/image-anne.jpg'

const TestimonyCard = (props) => {
  const {user, msg } = props.data;

  return ( 
    <div>
      <div>
      <span>
        {user==="Colton Smith" &&  <img src={colton} alt={user} />}
        {user==="Irene Robert" &&  <img src={irene} alt={user} />}
        {user==="Anne Wallace" &&  <img src={anne} alt={user} />}
      </span>
      <span>
        <p>{user}</p>
        <p>Verified Buyer</p>
      </span>
      </div>
      <p>{msg}</p>
    </div>
   );
}
 
export default TestimonyCard;