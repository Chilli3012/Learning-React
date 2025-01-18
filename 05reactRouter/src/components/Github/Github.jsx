import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/Chilli3012')
        .then(res=>res.json())
        .then((d)=>setData(d))
    },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl'>Github follower: {data.followers}</div>
  )
}

export default Github