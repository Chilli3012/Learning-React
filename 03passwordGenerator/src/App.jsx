
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { NULL } from 'mysql/lib/protocol/constants/types';

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  let passwordref=useRef(null);


  const passworGenerator = useCallback(()=>{
    let pass="";
    let charval="!@#$%^&*_+";
    let numval="0123456789";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str=numval+str;
    }
    if (charAllowed) {
      str=charval+str;
    }

    for(let i=1;i<=length;i++){
      let chr= Math.floor(Math.random() * str.length + 1);
      pass+=str[chr];
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordtoClipBoard=useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passworGenerator()
  },[length,numberAllowed,charAllowed, passworGenerator])

  return (
    <>
      {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-3 my-10 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center my-2 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
          />
          <button 
          onClick={copyPasswordtoClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'> 
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}} />
            <label> length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label> Number</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label> Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
