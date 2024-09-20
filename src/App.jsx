import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Loading from './Components/Loading'
const API_URL="https://www.omdbapi.com?apikey=b3ee82b4"
const App = () => {
  const [searchTitle,setsearchTitle]=useState("")
  const [movies,setmovies]=useState([])
  const [loading,setloading]=useState(false)
  const getmovie= async(title)=>{
const res=await fetch(`${API_URL}&s=${title}`,{mode:'cors'})
const moviedata=await res.json()
console.log(movies)
setmovies(moviedata.Search)

setloading(true)

  }
  const searchMovies = (e) =>{
    let searchValue = e.target.value
    setsearchTitle(searchValue) 
  }
  const movieserach=()=>{
    setloading(false)
    getmovie(searchTitle)
  }
  useEffect(()=>{
  getmovie('spy')
  },[])

  return (
    <div className=' flex justify-center mt-[4rem]  '>
    
     <div className="  space-y-4">
     <h1 className=' font-bold text-2xl'>Movie Land</h1>
     <label className="input input-bordered w-[400px] flex items-center gap-2 ">
  <input 
   value={searchTitle}
   onChange={searchMovies}
    type='text'
    className="grow   " 
    placeholder="Search" />
  <svg onClick={movieserach}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
<div className=" grid grid-cols-3 grid-row-3   items-center gap-4  ">
  {
 loading? movies?.length>0 ? movies.map((movie)=>(
  <Card movie={movie} key={movie.imdbID}/>
))
: <div className="">
  <h2>The movie does not exist</h2>
</div>
: <Loading/>
  }
</div>
     </div>
    </div>
  )
}

export default App
