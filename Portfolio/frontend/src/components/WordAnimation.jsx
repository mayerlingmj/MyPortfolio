import React from 'react'
import './WordAnimation.css'

function WordAnimation(props) {
  return (
    <div>
      <h4 className="wordCarousel">
        <span>A LITTLE ABOUT ME:</span>
        <div className="animation-div">
          <ul className="flip6">
            <li>WEB DEVELOPER</li>
            <li>TRAVEL ENTHUSIAST</li>
            <li>CODING CONNOISSEUR</li>
            <li>FROM: BROOKLYN NY</li>
            <li>ANIMAL & BOOK LOVER</li>
            <li>CODE WHISPERER</li>
          </ul>
        </div>
      </h4>
    </div>
  )
}

export default WordAnimation
