import React, { useState } from 'react';

function Advanced() {
  const [val, setVal] = useState({ name: "Huzefa", isBanned: true });



  return (
    <div className='p-4'>
      <h1>Name: {val.name}</h1>
      <h2>isBanned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 
        ${val.isBanned ? "bg-red-600" : "bg-blue-600"}
        rounded-full text-white mt-5 cursor-pointer`}>
        Change
      </button>
    </div>
  );
}
export default Advanced;
