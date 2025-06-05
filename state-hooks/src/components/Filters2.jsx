import React, { useState } from 'react';

function Filters2() {
  const [val, setVal] = useState([
    { name: "Huzefa ", age: 24 },
    { name: "Yasin ", age: 19 },
    { name: "Gill ", age: 32 }
  ]);
  return (
    <>
      <div className='p-5'>
       {val.map((item)=>(
        <div>{item.name}
        {item.age}</div>
       ))}
       <button
      onClick={()=>setVal(()=>val.map(item=>item.name === "Gill " ? {name: "Shubman ", age: 33} : item))}
        className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'
       >Change</button>
      </div>
    </>
  );
}

export default Filters2;