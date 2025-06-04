import React from 'react'

function Cards() {

    const data = [
        {name : "Mahiya ve", description : " The name of the card will be displayed"},
        {name : "Junoon", description : " The name of the card will be displayed"}
    ]
    const handleClickEvent=()=>{alert("Download Started")}
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
        {data.map((elem,index)=>(
            <div className='w-90 px-3 py-2 bg-zinc-100 rounded'>
            <h3 className='font-semibold text-xl'>{elem.name}</h3>
            <p className='text-xs mt-3'>{elem.description}</p>
            <button onClick={handleClickEvent} className='px-2 py-1 bg-blue-400 text-xs  font-semibold text-zinc-100 mt-5 rounded-md'>Download Now</button>
        </div>
        ))}
          
    </div>
  )
}

export default Cards
