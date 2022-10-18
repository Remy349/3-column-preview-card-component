import React from 'react'

export const Card = (props) => {
  return (
    <article className='cards__card'>
      <div className='cards__card-image'>
        <img
          className='cards__card-image_img'
          src={props.icon}
        />
      </div>
      <h3 className='cards__card-title'>
        {props.title}
      </h3>
      <p className='cards__card-description'>
        {props.description}
      </p>
      <div className='cards__card-btn'>
        <button className={`cards__card-btn_${props.color}`}>
          Learn More
        </button>
      </div>
    </article>
  )
}
