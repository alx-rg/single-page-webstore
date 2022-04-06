import React from "react";
import data from './data';

const total = data.reduce( (acc, obj) => {
  return acc + parseFloat(obj.price.slice(1) )

}, 0 ).toFixed(2)

const units = data.reduce( (acc, obj) => {
  return acc + obj.units
}, 0)

function Cost () {
  return (
    <div className="Inventory">
      <br></br>
      <h3> Total Cost of Inventory: ${total} </h3>
      <h3> Total Number of Inventory: {units} </h3>

    </div>
  )
}

export default Cost