import React, { useRef } from 'react';

const Form = () => {
  const nameRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();
  const expiryRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const quantity = quantityRef.current.value;
    const price = priceRef.current.value;
    const expiry = expiryRef.current.value;

    console.log('Name:', name);
    console.log('Quantity:', quantity);
    console.log('Price:', price);
    console.log('Expiry:', expiry);

    nameRef.current.style.borderColor = 'green';
    quantityRef.current.style.borderColor = 'green';
    priceRef.current.style.borderColor = 'green';
    expiryRef.current.style.borderColor = 'green';

    quantityRef.current.focus();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input ref={nameRef} type="text" placeholder="Name" required />
      <input ref={quantityRef} type="number" placeholder="Quantity" required />
      <input ref={priceRef} type="number" placeholder="Price" required />
      <input ref={expiryRef} type="number" placeholder="Expiry" required />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;