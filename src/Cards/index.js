import './index.scss'

import React from 'react'

const Cards = ({ imgUrl, title, desc }) => {
  return (
    <div className='card-container'>
      <div className="image-container">
        <img src={ imgUrl } alt="blog" />
      </div>
      <div className="desc-container">
        <div>
          <h3>{ title }</h3>
          <p>{ desc }</p>
        </div>
      </div>   
    </div>
  )
}

export default Cards