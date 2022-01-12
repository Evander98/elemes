import React, { useEffect, useState } from "react";
import {
  CardContainer,
  CardImage,
  CardItemAmount,
  CardRating,
  CardTitle,
} from "./CardElements";

const Card = ({ item, isTrending }) => {
  const { icon, title, amount, type, rate } = item;

  const [rating, setRating] = useState([])

  useEffect(() => {
    let temp = []
    for(let i = 0; i < 5; i++){
      if(i < rate){
        temp.push(<CardRating key={i} rated={1}/>)
      }else{
        temp.push(<CardRating key={i}/>)
      }
    }
    
    setRating(temp)
  }, [rate])


  return (
    <CardContainer
      isTrending={isTrending}
      background={Math.floor(Math.random() * 5)}
    >
      <CardImage isTrending={isTrending} src={icon} alt="Food" />
      <CardTitle isTrending={isTrending}>{title}</CardTitle>
      {isTrending ? (
        <div>
          <CardTitle primary>{type}</CardTitle>
          {rating}
        </div>
      ) : (
        <CardItemAmount>
          {amount} {amount > 1 ? "Items" : "Item"}
        </CardItemAmount>
      )}
    </CardContainer>
  );
};

export default Card;
