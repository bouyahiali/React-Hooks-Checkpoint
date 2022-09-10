import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';

const Filter = ({filterByName , filterByRating}) => {
  const [rating, setRating] = useState(0)
 const changeRating =( newRating, name )=>{
    setRating(newRating)
    filterByRating(newRating)
  }
  return (
   <div className="container mb-3 "> 
    <Form className="d-flex">
      <Form.Control
        onChange={(e)=>filterByName(e.target.value)}
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <StarRatings
          rating={rating}
          changeRating={changeRating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='30px'
        />
    </Form>
    </div>
  )
}

export default Filter