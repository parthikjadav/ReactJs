import React from 'react'

const Register = () => {

  hendleSubmit

  return (
    <div>
      <form onSubmit={hendleSubmit}> 
       <input type="text" name="name"   />
       <input type="password" name="password" />
       <input type="submit"/>
      </form>
    </div>
  )
}

export default Register
