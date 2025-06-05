import React, { useState } from 'react'

function levelup() {
    const [value, setValue] = useState([1, 2, 3, 4, 5, 6])
    return (
        <div className='p-10'>
            {value.map(item => <h1>{item}</h1>)}
            <button
                onClick={() => setValue(() => value.filter((item, index) => index != value.length - 1))}
                className='px-3 py-1 text-xs text-white rounded-full bg-blue-500 mt-5 position-fixed'>click</button>
        </div>
    )
}
export default levelup