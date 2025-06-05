import React, {useState} from 'react'

function Filters() {
    const [val, setVal] = useState([1,2,3,4,5,6])
    return (
        <div className='p-5'>
             
            {val.map(item=><h1>{item}</h1>)}   
            <button
            onClick={()=>setVal([...val,7])}
            className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'>Change</button>
         </div>  
    )   
}

export default Filters

//  <button onClick={()=>setVal(()=>val.filter(item => item%2 !== 0))} className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'>click</button>
//   <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=1 ))} className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'>click</button>
// //  <button
//             onClick={()=>setVal(()=>val.filter(index => index%2 !== 0))}
//             className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'>Change</button>
//          </div>  
