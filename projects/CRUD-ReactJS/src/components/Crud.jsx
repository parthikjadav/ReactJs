import axios from "axios";

import React, { useEffect, useRef, useState } from "react";
const Crud = () => {
  const [data, setdata] = useState([]);
  const fname = useRef();
  const lname = useRef();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  },[]);

  function submit () {
    let user = {
      fname: fname.current.value,
      lname: lname.current.value,
    };
 
    axios.post("http://localhost:3000/posts", user).then((res) => {
        setdata([...data,res.data])
    });
  };

   function remove(id){

     axios.delete("http://localhost:3000/posts/"+id).then(()=>{
        setdata(data.filter((val)=> val.id != id))
     })
   
  }
  
  return (
    <>
      <input type="text" ref={fname} />
      <input type="text" ref={lname} />
      <button onClick={submit}>add</button>

      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>sr No.</th>
              <th> FirstName</th>
              <th> LastName</th>
              <td> remove</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((val, ind) => (
              <tr key={ind}>
                <td> {ind + 1}</td>
                <td> {val.fname}</td>
                <td> {val.lname}</td>
                <td>
                  <button onClick={()=>remove(val.id)}> remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crud;
