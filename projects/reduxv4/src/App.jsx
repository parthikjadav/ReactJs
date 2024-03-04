import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getTodo } from './redux-toolkit/api/todo.fetch';

const App = () => {
  const dispatch = useDispatch()
  const store = useSelector((state)=> state.todo.todos)
  const handeleFetch=()=>{
    dispatch(getTodo())
  }
  console.log(store)
  
 
  // if(loading){
  //   return <h1>loading...</h1>
  // }

  return (
    <div>
      <button onClick={handeleFetch}> fetch data</button>
    </div>
  );
}

export default App;
