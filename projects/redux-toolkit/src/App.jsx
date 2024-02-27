// import React , { useState } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { getTodo} from './redux-toolkit/reducers/todoSlice'

// function App() {
//   const todo = useSelector(state => state.todos)
//   const dispatch = useDispatch()

//   const hendlefetchData=()=>{
//    dispatch( getTodo())
//   }

//   console.log(todo);

//   return (
//     <>
//       <button onClick={hendlefetchData}>fetch data</button>
//       {
//         todo?.map((val)=>
//         <h1>{val}</h1>
//         )
//       }
//     </>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getTodo, postTodo } from './redux-toolkit/reducers/todoSlice';

const App = () => {
  const [data,setdata]=useState({
    name:"",
    email:""
  })
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const loading = useSelector((state) => state.loading);



  useEffect(() => {
    dispatch(getTodo());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const changedata=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  const submitdata=()=>{
    dispatch(postTodo(data))
  }


  
  return (
    <>
    <div>
    <input  type="text" onChange={changedata} name="name"/>
    <input  type="text" onChange={changedata} name="email" />
    <button onClick={submitdata}> submit</button>
    </div>
    <div>
    <h1>Todos</h1>
    {
      todo.todos?.map((val,index)=>{
        return(
          <div key={index}>
          <h1>{val.name}</h1>
          <h1>{val.email}</h1>
            </div>
            )
          })
        }
        </div>
        </>
  );
};

export default App;
