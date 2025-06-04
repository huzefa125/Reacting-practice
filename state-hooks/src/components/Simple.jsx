import React, { useState } from 'react'

function Simple() {
  const [val,setVale] = useState(0)
    return (
    <div className='p-4'>
        <h1 className='ml-8'>{val}</h1>
        <button onClick={()=>setVale(prev=>prev+1)} className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md mt-4 text-white'>Change</button>
    </div>
  )
}

export default Simple