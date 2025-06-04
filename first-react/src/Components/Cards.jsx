import React from 'react';

function Cards() {

  const data = [
    {image : 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww', name : "Amazon Basics" , dexription : "The error you're encountering is due to the removal of the CLI binary from the main Tailwind CSS package in version 4.x. To resolve this, either",instock : true},
    {image : 'https://images.unsplash.com/photo-1556382363-8967ad2b37f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9ufGVufDB8fDB8fHww', name : "Daliy Objects", dexription : "This version includes the CLI binary, allowing you to run commands like npx tailwindcss init -p without issues", instock : false},
    {image:'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww', name :"Carding The React", dexription:"It appears you're encountering the error npm ERR! could not determine executable to run when attempting to initialize ",instock :true},
  ]

  return (
   <div className="w-full h-screen flex items-center justify-center gap-10 flex-horizontal bg-zinc-200">
     {data.map((elem,index)=>(
       <div className="w-64 bg-white rounded-md overflow-hidden shadow-md">
        {/* Image or Header Section */}
        <div className="w-full h-32 bg-zinc-300">
           <img className='w-full h-full object-cover' 
           src={elem.image} 
           alt="" />
        </div>
        <div className="w-full px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{elem.name}</h2>
          <p className="text-sm text-gray-600">{elem.dexription}
          </p>
          <button className={`px-4 py-2 ${elem.instock ? 'bg-sky-600' : 'bg-red-600'} text-xs rounded-md text-zinc-100 mt-5`}>
            {elem.instock === true ?  "In Stock" : "Out of Stock"}
            </button>
        </div>
      </div>
     ))}
    </div>
  );
}

export default Cards;

 