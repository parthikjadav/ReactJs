import React, { useRef, useState } from 'react'

const Form = () => {
 let name = useRef()
 let quantity = useRef();
 let price = useRef();
 let expiry = useRef();

 const [orgData,setOrgData] = useState([
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

 const hendleSubmit =(e)=>{
 e.preventDefault();

 let obj = {
   name: name.current.value,
   quantity: quantity.current.value,
   price: price.current.value,
   expiry: expiry.current.value,
   id:Date.now(),
 }
   setOrgData([...orgData,obj]);
   name.current.value = "";
   quantity.current.value = "";
   price.current.value = "";
   expiry.current.value = "";
 

 }

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="name"  ref={name} />
        <input type="text" name="quantity"  ref={quantity}/>
        <input type="number" name="price"  ref={price}/>
        <input type="date" name="expiry"  ref={expiry}/>
        <input type="submit"/>
      </form>

      {orgData.map((org) => (
        <div key={org.id}>
          <h2>{org.name}</h2>
          <p>Quantity: {org.quantity}</p>
          <p>Price: {org.price}</p>
          <p>Expiry: {org.expiry}</p>
        </div>
      ))}
    </div>
  );
}

export default Form
