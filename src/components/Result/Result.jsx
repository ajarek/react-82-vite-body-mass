import React from 'react'
import './Result.css'
const Result = ({ info, text }) => {
  return (
    <div className='result'>
      <h3>{info}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Result
