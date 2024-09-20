import React from 'react'

const Card = ({movie}) => {
  return (
    <div className=' relative '>
        <div className=" absolute left-5 text-[1.2rem] ">
            <p className=' font-semibold text-gray-500 hover:bg-slate-100 hidden hover:visible  '>{movie.Year} </p>
        </div>
     <div className="">
     <img className='w-[350px] h-[430px]  rounded-sm ' 
     src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/800'} 
     alt="movie"/>
      <h1 className=' text-[1.2rem] '>{movie.Title} </h1>
     
     </div>
    
    
    </div>
    
  )
}

export default Card
