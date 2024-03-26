import React, { useRef, useState } from "react";
import Crad from "./comp/Crad";

const App = () => {
  const [filterData, setfilterData] = useState([
    {
      id: 101,

      name: "Abacavir",

      quantity: 25,

      price: 150,

      expiry: 2022,
    },

    {
      id: 102,

      name: "Eltrombopag",

      quantity: 90,

      price: 550,

      expiry: 2021,
    },

    {
      id: 103,

      name: "Meloxicam",

      quantity: 85,

      price: 450,

      expiry: 2025,
    },

    {
      id: 104,

      name: "Allopurinol",

      quantity: 50,

      price: 600,

      expiry: 2023,
    },

    {
      id: 105,

      name: "Phenytoin",

      quantity: 63,

      price: 250,

      expiry: 2021,
    },
  ]);

  let price = useRef();

  const hedleSubmit = (e) => {
    e.preventDefault();
    let productPrice = price.current.value;
    let newArr = filterData.filter((val) => productPrice > val.price);
    setfilterData(newArr);
  };

  return (
    <div>
      <form onSubmit={hedleSubmit}>
        <input type="number" ref={price} />
        <input type="submit" />
      </form>
      <Crad data={filterData} />
    </div>
  );
};

export default App;
