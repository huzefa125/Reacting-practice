import React from 'react'

function Carding({ values, handleClick, index }) {
  // Use correct property name: Friends (capital F)
  const { name, image, Professsion, Friends } = values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-bold bt-2'>{name}</h3>
        <h5 className='text-xs '>{Professsion}</h5>
        <button className='px-3 m-2 py-1 text-xs text-white bg-blue-600 font-semibold rounded-md'
          onClick={() => handleClick(index)}
        >{Friends === true ? "Friends" : "Add Friends"}
        </button>
      </div>
    </div>
  )
}

export default Carding