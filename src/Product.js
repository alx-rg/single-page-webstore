import React from "react";
import Card from 'react-bootstrap/Card';

function Product(props) {

  const { name, description, price, category, rating, units } = props
  return (
  <div>
    <Card className='p-4'>
      <h3>{name}</h3>
      <span>{description}</span>
      <em>Rating: {rating}</em>
      <span>Price: {price}</span>
      <small>Category: {category} / Count: {units}</small>
    </Card>
  </div>
  )
}

export default Product