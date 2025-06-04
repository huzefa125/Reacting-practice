import React, { useState } from 'react';

function Advanced() {
  const [val, setVal] = useState({ name: "Huzefa", isBanned: false });

  const handleClick = () => {
    setVal(prev => ({...prev,isBanned: !prev.isBanned}));
  };

  return (
    <div className='p-4'>
      <h1>Name: {val.name}</h1>
      <h2>isBanned: {val.isBanned.toString()}</h2>
      <button 
        onClick={handleClick} 
        className='px-3 py-1 bg-blue-600 rounded-full text-white mt-5 cursor-pointer'>
        Change
      </button>
    </div>
  );
}
export default Advanced;
