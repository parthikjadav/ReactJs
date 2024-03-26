import React, { useState } from "react";

const Form = () => {
  const [data, setdata] = useState();

  const hendelSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log();
  };
  const hendelInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" name="title" onChange={hendelInputValue} />
        <input type="text" name="rating" onChange={hendelInputValue} />
        <input type="text" name="desc" onChange={hendelInputValue} />
        <input type="submit" onSubmit={hendelSubmit} />
      </form>
    </div>
  );
};

export default Form;
