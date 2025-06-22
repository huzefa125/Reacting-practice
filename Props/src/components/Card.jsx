import React from 'react'

function Card({text,color}) {
  return (
    <>
        <button className={`rounded ${color} mt-10  ml-5 px-3 py-1  text-zinx-100 text-xs m-2 `}>
{text}
</button>
    </>
  )
}

export default Card