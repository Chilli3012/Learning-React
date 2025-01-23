import React from 'react'
import { useState } from 'react'

function Login() {
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);

    const setter=()=>{}
  return (
    <div>
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" "}
        <input 
        type="text" 
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button 
        type='submit'
        onClick={setter}
        >Submit</button>
    </div>
  )
}

export default Login