import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
  return (
    <div className="container">
      <div className="wrapper">
       { data.map(el=> <MovieCard el={el} key={el._id} />)}
    </div>
    </div>
    
 

  )
}

export default MovieList