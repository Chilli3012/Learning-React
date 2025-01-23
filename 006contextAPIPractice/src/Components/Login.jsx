import { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(UserContext);

    const submitHandler=(e)=>{
        e.preventDefault()
        setUser({username,password});
    }
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
        onClick={submitHandler}
        >Submit</button>
    </div>
  )
}

export default Login