import React from 'react'
import StarRatings from 'react-star-ratings'

const MovieCard = ({el}) => {
  return (
    
    
    <div className="card">
      <img src={el.ImageURL} alt=""/>
      <div className="descriptions">
        <h1>{el.Title}</h1>
        <p>{el.Description} </p>
        <h4 style={{color: 'green'}}>{el.Genre.Name}</h4>
        <p>
        <StarRatings
          rating={el.Rating}
          // changeRating={}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='30px'
        />
        </p>
      </div>
    
   
</div>
  )
}

export default MovieCard